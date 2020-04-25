import {Component, OnInit, ViewChild} from '@angular/core';
import {Patient} from '../../../models/patient.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {first} from 'rxjs/operators';
import {PatientService} from '../../../services/patient/patient.service';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'ngx-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.scss'],
})
export class ImportDataComponent implements OnInit {
  @ViewChild('fileReader') fileReader: any;
  public error: any;
  public checkmarks: any[] = [];
  public records: any[] = [];
  public csvRecordsArray: any[];
  public mainData = {
    columns: [
      {
        name: 'Source (Imported) columns',
        items: [],
      }, {
        name: 'Target columns',
        items: [
          {
            name: 'dateOfBirth',
            value: null,
          },
          {
            name: 'sex',
            value: null,
          },
          {
            name: 'address',
            value: null,
          },
          {
            name: 'contact',
            value: null,
          },
          {
            name: 'assignedDoctor',
            value: null,
          },
          {
            name: 'drugAllergy',
            value: null,
          },
          {
            name: 'smoking',
            value: null,
          },
          {
            name: 'coronaryHeartDisease',
            value: null,
          },
          {
            name: 'heartArrhythmia',
            value: null,
          },
          {
            name: 'heartFailure',
            value: null,
          },
          {
            name: 'lungDisease',
            value: null,
          },
          {
            name: 'asthma',
            value: null,
          },
          {
            name: 'chronicKidneyDisease',
            value: null,
          },
          {
            name: 'diabetes',
            value: null,
          },
          {
            name: 'heartStroke',
            value: null,
          },
          {
            name: 'malignantDisease',
            value: null,
          },
          {
            name: 'chronicLiverDisease',
            value: null,
          },
          {
            name: 'inflamatoryBowelDisease',
            value: null,
          },
          {
            name: 'reuma',
            value: null,
          },
          {
            name: 'hiv',
            value: null,
          },
          {
            name: 'medications',
            value: null,
          },
          {
            name: 'operations',
            value: null,
          },
        ],
      },
    ],
  };
  public importedColumns: any[] = [];
  public currentId: number = 0;

  constructor(private patientService: PatientService, private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
  }

  get columnIds(): number[] {
    return this.importedColumns.map(item => item.id = this.currentId++);
  }

  /**
   * Upload data listener function
   *
   * @param event
   */
  public uploadDataListener(event: any) {
    let files = event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {
      let input = event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        this.csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        this.importedColumns = this.getHeaderArray(this.csvRecordsArray);
        this.records = this.getDataRecordsArrayFromCSVFile(this.csvRecordsArray, this.importedColumns.length);
        if (this.importedColumns.length) {
          this.importedColumns.map(item => {
            this.checkmarks.push({
              columnName: item.name,
              checked: false,
            });
          });
        }
        this.importedColumns.map((item, index) => {
          let newItem = {
            name: item,
            value: [],
          };
          this.records.map((record) => {
            const innerItem = record[index];
            newItem.value.push(innerItem);
          });
          this.mainData.columns[0].items.push(newItem);
        });
        console.table(this.mainData.columns[0].items);
      };
      reader.onerror = function () {
        console.log('Error is occurred while reading file');
      };
    } else {
      alert('Please import valid .csv file.');
      this.fileReset();
    }
  }

  private getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      let currentRecord = (<string>csvRecordsArray[i]).split(',');
      if (currentRecord.length === headerLength) {
        csvArr.push(currentRecord);
      }
    }
    return csvArr;
  }

  private isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  private getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  private fileReset() {
    this.fileReader.nativeElement.value = '';
    this.records = [];
  }

  /**
   * On item drop function
   *
   * @param event
   */
  public onItemDrop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  /**
   * Save imported data function
   */
  public saveImportedData() {
    let data = [];
    this.records.map((record, i) => {
      const checkedColumns =
        this.mainData.columns[0].items.filter((item, index) => this.mainData.columns[1].items[index]
          && this.checkmarks[index] && this.checkmarks[index].checked === true);
      let patientItem = {};
      checkedColumns.map(column => patientItem[column.name] = column.value[i]);
      data.push(patientItem);
    });
    this.patientService.importCSVData(data)
      .pipe(first())
      .subscribe(
        (result: Patient) => {
          if (result) {
            this.openDialog();
          }
        },
        error => {
          this.error = error;
        });
  }

  private openDialog() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'Patients data has been successfully imported',
      },
    });
  }

  /**
   * Checkmark item as done
   *
   * @param index
   * @param title
   */
  public checkMarkItem(index, title) {
    this.checkmarks[index] = {
      columnName: title,
      checked: !this.checkmarks[index].checked,
    };
  }
}
