export interface IExecution {
    id:string,
    attributes: {
        date: Date,
        duration: string,
        startdate: Date,
        primarykey: string,
        identifier: string,
        project_name: string,       
        status: string
    }
}