interface Student {
    name:string;
    birthDate:number;
    income:number;
    city:string;
    genre:string;
}

class CreateStudentService{
    execute({name,birthDate,income,city,genre}:Student){
        console.log({
            name,
            birthDate,
            income,
            city,
            genre
        });
    }
}

export default new CreateStudentService;