export class NewsInfo  {
    id : number
    newsTitle : string;
    description : string;
    summary : string;
    fullNews : string;
    imagePath : string;

    constructor(title : string, desc : string, imagePath : string){
        this.newsTitle = title;
        this.description = desc;
        this.imagePath = imagePath;
    }

}