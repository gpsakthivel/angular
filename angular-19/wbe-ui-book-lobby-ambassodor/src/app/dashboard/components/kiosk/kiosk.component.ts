import { Component, Renderer2, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-kiosk',
  templateUrl: './kiosk.component.html',
  styleUrl: './kiosk.component.scss'
})
export class KioskComponent {

  @ViewChild(MatSort) sort!: MatSort;
 
  isExpanded:boolean = false;
  kisokDetails:any[]= [
    { kioskId: 'K123', status: 'In-Use', guestFlow: 'Normal dgfjgsh gjhgwdgjhwvjv ghgdsfh ', usageTime: '5h', lastSession: '2024-12-12' },
    { kioskId: 'K124', status: 'Free', guestFlow: ' jhgd kjds jknk jkskj jkssd', usageTime: '3h', lastSession: '2024-12-11' },
    { kioskId: 'K125', status: 'Error', guestFlow: ' djksdkjjk  k dsb skdkjd', usageTime: '8h', lastSession: '2024-12-10' },
    { kioskId: 'K123', status: 'Offline', guestFlow: 'Normal', usageTime: '5h', lastSession: '2024-12-12' },
    { kioskId: 'K124', status: 'Error', guestFlow: ' hjdsh jhg hjg hgdhsg', usageTime: '3h', lastSession: '2024-12-11' },
    { kioskId: 'K125', status: 'Active', guestFlow: 'Normal', usageTime: '8h', lastSession: '2024-12-10' },
    { kioskId: 'K123', status: 'Offline', guestFlow: 'Normal', usageTime: '5h', lastSession: '2024-12-12' },
    { kioskId: 'K124', status: 'In-Use', guestFlow: 'Error', usageTime: '3h', lastSession: '2024-12-11' },
    { kioskId: 'K125', status: 'Error', guestFlow: 'Normal', usageTime: '8h', lastSession: '2024-12-10' },
  ]

  kioskCurrentStatusMenus:any[] =[
    {
      name: 'Free',
      color: '#268464',
      background: '#baeddb',
      count: 9,
    },
    {
      name: 'In-Use',
      color: '#3C5A82',
      background:  '#adc8eb',
      count: 4,
    },
    {
      name: 'Error',
      color: '#A21A15',
      background: '#fbc8c6',
      count: 4,
    },
    {
      name: 'Offline',
      color: '#9C9C9C',
      background: '#e4e0e0',
      count: 4,
    }
  ]
  sideBarContent:any[] = []


  dataSource = new MatTableDataSource(this.kisokDetails);

  columnsToDisplay = [
    { key: 'kioskId', label: 'Kiosk ID' },
    { key: 'status', label: 'Status' },
    { key: 'guestFlow', label: 'Guest Flow / Error Flow' },
    { key: 'usageTime', label: 'Usage Time' },
    { key: 'lastSession', label: 'Last Session' },
  ];
  columnKeys: string[] = [];

  constructor(private snackBar: MatSnackBar, private router: Router,  public route : ActivatedRoute,  private renderer: Renderer2){

  }

  ngOnInit(): void {
    this.columnKeys = this.columnsToDisplay.map((column:any) => column.key);
    this.dataSource.sort = this.sort;
    if(this.kisokDetails.find((e)=>e.status == 'Error')){
      this.errorSnackBar('Kiosk Need Assistance')
    }
    this.kioskCurrentStatusMenus.forEach((e, index)=> {
      this.kioskCurrentStatusMenus[index].count= this.kisokDetails.filter((h:any)=> h.status === e.name).length
    })
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    const filters = document.querySelector('.filter-buttons');
    if (filters) {
      const newDiv = document.createElement('div');   
      newDiv.textContent = 'ALL';  
      newDiv.style.borderRadius= '5px';
      newDiv.style.padding = '1.5% 2%';
      newDiv.style.fontSize = '14px';
      newDiv.style.fontWeight = '700';
      newDiv.style.border = '1px solid #3F51B5';
      newDiv.classList.add('filter-btn');
      filters.insertBefore(newDiv, filters.firstChild);
    }
  }


  getStateColor(status:any) {
    switch(status) {
      case ('Submitted'):
      case ('Draft'):
        return 'green-svg';
        break;
      
      case ('Closed'):
        return 'gray-svg';
        break;
      default:
        return 'white'
    }
  }

  getAmount(amount:number) {
    return (amount === 0 ? 'FREE' : amount+" €");
  }

  errorSnackBar(content:string) {
    const filter= "Error";
    const action ='action';
    let sb = this.snackBar.open(`${this.kioskCurrentStatusMenus[2].count} ${content}`, action, {
      panelClass: ["snackbar-content"],
      verticalPosition: "bottom", 
      horizontalPosition: "end",
    },);

    sb.onAction().subscribe(() => {
      this.sideBarContent = this.kisokDetails.filter((e)=>e.status.toLowerCase() === filter.toLowerCase())

      this.isExpanded = true
    });
    sb.afterOpened().subscribe(() => {
      const snackBarContainer = document.querySelector('simple-snack-bar'); // Finds the snackbar container
      const actionButton = snackBarContainer?.querySelector('.mat-mdc-snack-bar-action');
   
      if (actionButton) {
        const img = document.createElement('img');
        img.src = '../../../../../../assets/icons/kioskAssistanceArrow.svg';
        img.alt = 'icon';
        img.style.width = '24px';
        img.style.height = '24px';
        img.style.marginRight = '8px';
        img.className= 'kiosk-error-up-arrow'
        const actionBtn = actionButton.querySelector('.mdc-button__label')
        if(actionBtn  instanceof HTMLElement) actionBtn.style.display = 'none'
  
        actionButton.insertBefore(img, actionButton.firstChild);
      }
    });
  }

  closeSideNav(){
    this.isExpanded = false;
  }
  

  filterTableData(event:string){
    console.log(event)
   const filterByStatus = this.kisokDetails.filter((e)=>e.status.toLowerCase() === event.toLowerCase())
   if(filterByStatus.length){
    this.dataSource = new MatTableDataSource(filterByStatus);
   }else{
    this.dataSource = new MatTableDataSource(this.kisokDetails);
   }
   

  }

  openKioskStatus(id:string){
    console.log('`kiosk/${id}`', `kiosk/${id}`)
    console.log(this.route.snapshot.url);
    this.router.navigate([`/llay/dashboard/kiosk/${id}`], { relativeTo: this.route })
  }

  getRandomIcon(icon:string){
    return `${icon}.svg`
  }
  
  setColor(event:string, column:string){
    const item = this.kioskCurrentStatusMenus.find(item => item.name ===event)
    if(item){
      if(column.toLocaleLowerCase() ==='status'){
        return{
          'color': item.color,
          'background': item.background
        } 

      }else{
        return{
          'color': item.color,
        } 
      }
    }else{
      return
    }
   
  }
  
}
