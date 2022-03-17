export class SectionModel {

    public id: string;
    public title: string;
    public text: string;
    public styles: string[];

    constructor(id: string, title: string, text: string, styles: string[]) {
        this.id = id
        this.title = title
        this.text = text
        this.styles = styles
    }
}
