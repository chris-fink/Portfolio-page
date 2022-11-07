//variables for API
const url = 'https://api.github.com/users/chris-fink';
const main = document.querySelector('#posts');
const following = document.querySelector('#following');
const followers = document.querySelector('#followers');

//Fetch API data
function searchProfile(url){
    fetch(url)
    .then(res => res.json())
    .then(function(data){

        //Create elements for HTML response
            const h5 = document.createElement('h5');
            const h4 = document.createElement('h4');
            const h6 = document.createElement('h6');

        //Append elements to the main elements
            main.appendChild(h4);
            following.appendChild(h5); 
            followers.appendChild(h6);

            //Display API data on elements
            h4.innerHTML = `${data.public_repos} Repos`;
            h5.innerHTML =  `${data.following} Following`;
            h6.innerHTML = `${data.followers} Followers`;      
    });
}

//preload a search for Denver weather so client doesn't see dummy data  
searchProfile.fetch(searchProfile(url));