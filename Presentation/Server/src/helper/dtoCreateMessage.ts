
class dtoCreateMessage{

    private idest:number;
    private idcr:number;
    private content:string;

    constructor(idest:number,idcr:number, content:string){
        this.idest = idest;
        this.idcr = idcr;
        this.content = content;
    }

    public getIdest(): number {
        return this.idest;
    }

    public setIdest(idest: number): void {
        this.idest = idest;
    }

    public getIdcr(): number {
        return this.idcr;
    }

    public setIdcr(idcr: number): void {
        this.idcr = idcr;
    }

    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
    }

}

export default dtoCreateMessage;