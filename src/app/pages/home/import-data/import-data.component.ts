import {Component, OnInit, ViewChild} from '@angular/core';
import {Patient} from '../../../models/patient.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'ngx-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.scss']
})
export class ImportDataComponent implements OnInit {
  @ViewChild('fileReader') fileReader: any;
  public records: any[] = [];
  public importedColumns: any[] = [];
  public currentId: number = 0;

  constructor() {
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
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        this.importedColumns = this.getHeaderArray(csvRecordsArray);
        // this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, this.importedColumns.length);
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
      if (currentRecord.length == headerLength) {
        let csvRecord: Patient = new Patient();
        csvRecord.firstName = currentRecord[1].trim();
        csvRecord.lastName = currentRecord[2].trim();
        csvArr.push(csvRecord);
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
    debugger;
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
}
