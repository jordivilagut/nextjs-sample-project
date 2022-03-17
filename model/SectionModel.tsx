export class SectionModel {

    public title: string;
    public text: string;
    public styles: string[];

    constructor(title: string, text: string, styles: string[]) {
        this.title = title
        this.text = text
        this.styles = styles
    }
}
