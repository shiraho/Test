import { Component, OnInit, ViewChild } from '@angular/core';
import { ListItemService } from '../Service/listItem.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IListItem } from '../Models/ListItem';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';


@Component({

    templateUrl: 'app/Components/home.component.html'

})
export class HomeComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    Global: Global
    ListItems: IListItem[] = [];
    ListItem: IListItem;
    msg: string;
    indLoading: boolean = false;
    listItemFrm: FormGroup;
    modalTitle: string;
    modalBtnTitle: string;
    ngOnInit(){
        //this._ListItemService
        //    .get(Global.BASE_USER_ENDPOINT)
        //    .subscribe(ListItems => { this.ListItems = ListItems; console.log(this.ListItems); });        
        this.LoadListItems()

    }
    LoadListItems(): void {
        this.indLoading = true;
        this._ListItemService.get(Global.BASE_USER_ENDPOINT)
            .subscribe(ListItems => {
            this.ListItems = ListItems;
            this.indLoading = false;
            console.log(this.ListItems); 
            },
            error => this.msg = <any>error);

    }
    public Types = [
        { value: true, display: 'Defect' },
        { value: false, display: 'Task' }
    ];
    
    


    constructor(/*private fb: FormBuilder,*/ private _ListItemService: ListItemService) { }
}

