interface Course { 
    subject:string;
    name:string;
    author:string;
    price:number;
}

class CreateCourseService{
    execute({subject,name,author,price}:Course){
        console.log({
            subject,
            name,
            author,
            price});
    }
}

export default new CreateCourseService;