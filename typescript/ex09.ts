class Project {
    public id: number
    public name: string
    private client: string
    constructor(id: number, name: string, client: string) {
        this.id = id
        this.name = name
        this.client = client
    }
    
}

class Employee {
    constructor(public id: number, public name: string, public department: string, public projects: object[] ){
        this.id = id
        this.name = name
        this.department = department
        this.projects = projects
    }
}

const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' );

console.log(dbsPayroll, "\n", intranetDeployment)

const john = new Employee( 1, 'John', 'IT', [ dbsPayroll ] );
const jane = new Employee( 2, 'Jane', 'IT', [ dbsPayroll, intranetDeployment ] );
const mark = new Employee( 3, 'Mark', 'Operations', [ intranetDeployment ] );

console.log(john, "+", jane)