const Data = [
    {
        name: 'Adam',
        age: 20,
        salary: 30100
    },
    {
        name: 'Bob',
        age: 60,
        salary: 102000
    },
    {
        name: 'Carla',
        age: 31,
        salary: 57000
    },
    {
        name: 'Dave',
        age: 42,
        salary: 22000
    },
    {
        name: 'Ethel',
        age: 80,
        salary: 91000
    },
    {
        name: 'Frank',
        age: 28,
        salary: 73000
    },
    {
        name: 'Gina',
        age: 21,
        salary: 16000
    }
    ]

// these variables are used to check to see if the bar has already been made.
let salBar = false;
let ageBar = false;

// Triggered by making a selection from dropdown
const render = () =>{
    let value = document.getElementById('data').value;
    document.getElementById('main-contain').style.display = 'block'
    
    if(value == 'age'){
        renderAge();
    } else if (value == 'salary'){
        renderSalary()
    }
}

// gathers the data required to make "Age" bargraph or show the bar if it has aleady been made
const renderAge = () => {
    if(ageBar){
        let graphAge = document.getElementById('horizontal-bg-age')
            graphAge.style.display= 'block'
            let graphSal = document.getElementById('horizontal-bg-sal')
            graphSal.style.display= 'none'
    } else {
        let values = []

        for(let i = 0; i < Data.length;i++){
            values.push( [Data[i].age,Data[i].name] )
        }

        values.sort((a,b) => {return b[0] - a[0]})

        let graphAge = document.getElementById('horizontal-bg-age')
            graphAge.style.display= 'block'
            let graphSal = document.getElementById('horizontal-bg-sal')
            graphSal.style.display= 'none'

        makeBar(graphAge,values, 110)

        ageBar = true;
    }
}

// gathers the data required to make "Salary" bargraph or show the bar if it has aleady been made
const renderSalary = () => {
    if(salBar){
        let graphAge = document.getElementById('horizontal-bg-age')
            graphAge.style.display= 'none'
            let graphSal = document.getElementById('horizontal-bg-sal')
            graphSal.style.display= 'block'
    } else{

        let values = []

        for(let i = 0; i < Data.length;i++){
            values.push( [Data[i].salary,Data[i].name] )
        }

        values.sort((a,b) => {return b[0] - a[0]})

        let graphAge = document.getElementById('horizontal-bg-age')
            graphAge.style.display= 'none'
        let graphSal = document.getElementById('horizontal-bg-sal')
            graphSal.style.display= 'block'

        makeBar(graphSal,values,200000)

        salBar = true;
    }
}

// gets called by both renderSalary and renderAge to create each individual bars
const makeBar = (graph,values,max) =>{
    for( let i = 0; i < values.length; i++){

        let container = document.createElement('div')
        container.classList.add('single-bar')
        graph.appendChild(container)

        let name = document.createElement('p')
        name.innerHTML = values[i][1]
        name.classList.add('name')

        let animation = document.createElement('div')
        animation.classList.add('animation')

        let bar = document.createElement('div')
        bar.classList.add('bar')

        let barLabel = document.createElement('p')
        barLabel.innerHTML = values[i][0]
        barLabel.classList.add('bar-label')

        container.appendChild(name)
        container.appendChild(animation)
        animation.appendChild(bar)
        bar.appendChild(barLabel)

        setLength(bar, values[i][0] , max);
    }
}

// gets called on my makeBar to adjust bar length to match data
const setLength = (element, value, max) => {
    let length = value/max * 100
    element.style.width = `${length}%`
}

