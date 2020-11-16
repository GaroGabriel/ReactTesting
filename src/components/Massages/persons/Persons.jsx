import React from 'react';
import Person from './person/Person';
import './Persons.css'

let personsArr = [
    {
        id: 1,
        img: 'https://miro.medium.com/focal/1200/1200/48/51/1*k-B13-IWqjtFx09A9LKTkg.jpeg',
        alt: 'meeger',
        name: 'Aramik',
        age: '28',
        job: 'Meneger',
    },
    {
        id: 2,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLt_nHyR3Toaccc7xvDzvcr22DtPZawAW_1Q&usqp=CAU',
        alt: 'weiter',
        name: 'Hasmik',
        age: '21',
        job: 'weiter',
    },
    {
        id: 3,
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/03-the-joker-w1200-h630-1562679871.jpg?crop=0.525xw:1xh;center,top&resize=640:*',
        alt: 'Joker',
        name: 'Joker',
        age: '25',
        job: 'Joker',
    },
    {
        id: 4,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Anja_P%C3%A4rson_p%C3%A5_Idrottsgalan_2013.jpg/274px-Anja_P%C3%A4rson_p%C3%A5_Idrottsgalan_2013.jpg',
        alt: 'weiter',
        name: 'Hasmik',
        age: '21',
        job: 'weiter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLt_nHyR3Toaccc7xvDzvcr22DtPZawAW_1Q&usqp=CAU',
        alt: 'weiter',
        name: 'Hasmik',
        age: '21',
        job: 'weiter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLt_nHyR3Toaccc7xvDzvcr22DtPZawAW_1Q&usqp=CAU',
        alt: 'weiter',
        name: 'Hasmik',
        age: '21',
        job: 'weiter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLt_nHyR3Toaccc7xvDzvcr22DtPZawAW_1Q&usqp=CAU',
        alt: 'weiter',
        name: 'Hasmik',
        age: '21',
        job: 'weiter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLt_nHyR3Toaccc7xvDzvcr22DtPZawAW_1Q&usqp=CAU',
        alt: 'weiter',
        name: 'Hasmik',
        age: '21',
        job: 'weiter',
    },
];


let personMap = personsArr.map((per) => {
    return (
        <Person
            img={per.img}
            alt={per.alt}
            name={per.name}
            age={per.age}
            job={per.job} />
    )
})



const Persons = () => {


    return (
        <div className='persons__wrapper'>
            <div className='persons__inner'>
                {personMap}
            </div>
        </div>
    )

}

export default Persons