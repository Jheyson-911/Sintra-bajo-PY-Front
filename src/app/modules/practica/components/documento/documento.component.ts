import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { first } from 'rxjs';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss']
})
export class DocumentoComponent implements OnInit {
  documentos: string[] = [];

  constructor(private storage:Storage) { }

  ngOnInit(): void {
    this.getDocuments();
  }
  uploadDoc($event:any) {
    const file = $event.target.files[0];
    console.log(file);

    const docRef = ref(this.storage, `documents/${file.name}`);

    uploadBytes(docRef, file).then((res) => {
      console.log('Uploaded', res);
    }
    ).catch(err => {
      console.log(err);
    }
    );
  }

  getDocuments(){
      const documentRef = ref(this.storage, 'documents');

      listAll(documentRef).then( async res => {
        console.log(res);
        this.documentos = [];

        for(let item of res.items){
          const url = await getDownloadURL(item);
          console.log(url);
          this.documentos.push(url);
        }
      }
      ).catch(err => {
        console.log(err);
      }
      );
  }

}
