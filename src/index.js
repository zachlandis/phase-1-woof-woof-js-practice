
fetch('http://localhost:3000/pups')
.then(res => res.json())
.then(data => data.forEach(dog => buildDogs(dog)))


function buildDogs(dog) {
    let dogSpan = document.createElement('span')
    dogSpan.textContent = `${dog.name}`
    dogSpan.style = 'center'
    document.querySelector(['#dog-bar']).append(dogSpan)
    
    dogSpan.addEventListener('click', () => {
        let dogName = document.createElement('h2')
        dogName.textContent = `${dog.name}`
        dogName.id = 'dog-info'
        
        let dogImg = document.createElement('img')
        dogImg.src = `${dog.image}`
        dogImg.id = 'dog-info'

        let dogBtn = document.createElement('button')
        dogBtn.textContent = 'Good Dog!'
        dogBtn.id = 'dog-info'
        dogBtn.addEventListener('click', (e) => {
            if (dogBtn.textContent === 'Good Dog!') {
                dogBtn.textContent = 'Bad Dog!'
                fetch(`http://localhost:3000/pups/${dog.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        "name": `${dog.name}`,
                        'image': `${dog.image}`,
                        'id': `${dog.id}`,
                        'isGoodDog': false
                    })
                })
            } else {
                dogBtn.textContent = 'Good Dog!'
                fetch(`http://localhost:3000/pups/${dog.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        "name": `${dog.name}`,
                        'image': `${dog.image}`,
                        'id': `${dog.id}`,
                        'isGoodDog': true
                    })
                })
            }
        })
        document.querySelector(['#dog-info']).append(dogImg, dogName, dogBtn)
    })
    }


    // let filterGoodDogsBtn = document.querySelector(['#good-dog-filter'])
    // filterGoodDogsBtn.addEventListener('click', fetchGoodDogs)

    // function fetchGoodDogs(dog) {
    //     fetch('http://localhost:3000/pups')
    //     .then(res => res.json())
    //     .then(data => data.forEach(dog => isDogGood(dog)))
    // }

    // function isDogGood(dog) {
    //     if (dog.isGoodDog === 'true') {
    //         filterGoodDogs(dog)
    //     } 
    // }
    
    
    // function filterGoodDogs(dog) {            
    //         let dogName = document.createElement('h2')
    //         dogName.textContent = `${dog.name}`
    //         dogName.id = 'dog-info'
            
    //         let dogImg = document.createElement('img')
    //         dogImg.src = `${dog.image}`
    //         dogImg.id = 'dog-info'
    
    //         let dogBtn = document.createElement('button')
    //         dogBtn.textContent = 'Good Dog!'
    //         dogBtn.id = 'dog-info'

    //         document.querySelector(['#dog-summary-container']).append(dogName, dogImg, dogBtn)


    // }




