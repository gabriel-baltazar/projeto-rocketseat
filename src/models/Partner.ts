interface Partner {
    name:string;
    city:string;
    contribution:number;
}

class CreatePartnerService{
    execute({name,city,contribution}:Partner){
        console.log({
            name,
            city,
            contribution
        });
    }
}

export default new CreatePartnerService;