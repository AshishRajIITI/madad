const services=[
    {
        service:"Covid-Plasma",
        key1:"BloodGroup",
        key2:"Date of recovery",
        donorAUTH:false,    
    },
    {
        service:"Bed",
        key1:"With/without oxygen",
        key2:"With/ without ventilator",
        donorAUTH:false,    
    },
    {
        service:"Blood",
        key1:"BloodGroup",
        key2:"No of Units",
        donorAUTH:false,    
    },
    {
        service:"OxygenCylinder",
        key1:"Capacity",
        key2:"Status(full/empty)",
        donorAUTH:true,    
    },
    {
        service:"Ambulance",
        key1:"With/Without oxygen",
        key2:"Capacity",
        donorAUTH:true,    
    },
    {
        service:"Medicines",
        key1:"Home Delivery Available",
        key2:"Night Service",
        donorAUTH:false,    
    },
    {
        service:"Remdesivir",
        key1:"Dose",
        key2:"Amount",
        donorAUTH:true,    
    },
    {
        service:"Tiffin",
        key1:"Charges",
        key2:"Home Delivery Available",
        donorAUTH:false,    
    },
    ]
    
    export default services;