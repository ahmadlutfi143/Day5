let projects = [];

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

// INPUT DATA ADD PROJECT
function addProject() {
  let title = document.getElementById('project').value;
  let start = new Date(document.getElementById('start').value);
  let end = new Date(document.getElementById('end').value);
  let description = document.getElementById('description').value;
  let html = document.getElementById('Html').checked;
  let css = document.getElementById('Css').checked;
  let javascript = document.getElementById('Java').checked;
  let react = document.getElementById('React').checked;
  let image = document.getElementById('upload').files[0];
  let duration = difference(start, end);
  let date = `${start.getDate()} ${month[start.getMonth()]} ${start.getFullYear()} - ${end.getDate()} ${month[end.getMonth()]} ${end.getFullYear()}`;

  console.log(start)
  console.log(end)

  console.log(projects)

  image = URL.createObjectURL(image);

  if (html == true) {
    html = 'fa-brands fa-html5';
  } else {
    html = '';
  }

  if (css == true) {
    css = 'fa-brands fa-css3-alt';
  } else {
    css = '';
  }

  if (javascript == true) {
    javascript = 'fa-brands fa-js-square';
  } else {
    javascript = '';
  }

  if (react == true) {
    react = 'fa-brands fa-react';
  } else {
    react = '';
  }

let project = {
    title: title,
    start: start,
    end: end,
    description: description,
    duration:duration<30 ? duration+" Hari" : parseInt(duration/30)+" Bulan",
    html: html,
    css: css,
    javascript: javascript,
    react: react,
    image: image,
    author: 'Ahmad Lutfi Afifi',
    postedAt: new Date(),
  };

  projects.push(project);

  renderProjects();

  
}

// RENDER DISPLAY TO MY PROJECT
function renderProjects() {
    let projectContainer = document.getElementById('stock');
  
    projectContainer.innerHTML = '';
  
    projects.forEach((data) => {
      projectContainer.innerHTML += `<main class="grid" id="stock">
      <article>
        <img src="${data.image}" style="width: 100%; border-radius: 10px" />
        <div class="posting" id="posting-card">
          <h3><a href="project-detail.html" target="_blank" onclick="${renderProjectDetail()}">${data.title}</a></h3>
          <span class="post-date">
            <time class="post-date">durasi : ${data.duration}</time>
          </span>
          <p>${data.description}</p>
          <div class="logo">
          <i class="${data.html}"></i>
          <i class="${data.react}"></i>
          <i class="${data.css}"></i>
          <i class="${data.javascript}"></i>
          </div>
          <div class="btn-submit">
            <button type="button">edit</button>
            <button type="button">delete</button>
          </div>
          <div class="time-ago">${getDistanceTime(data.postedAt)}</div>
        </div>    
      </article>

     

    </main>`;
    });
}

// RENDER PROJECT-DETAIL
function renderProjectDetail() {
  let projectDetail = document.getElementById('detailing');

  projects.forEach((data) => {
  projectDetail = `<div class="judul-project" id="detailing">
  <h1>${data.title}</h1>
</div>
<div class="detail-page">
    
    <div class="form-group left">
        <img src="${data.image}" style="width: 100%; border-radius: 10px" />
      </div>

      <div class="form-group right">
        <div style="display: flex;flex-direction: column;">
            <div class="head-detail-duration">
            <h3>Duration</h3>
            <p><i class="fa-solid fa-calendar-days"></i>${data.start} - ${data.end}</p>
            <p><i class="fa-solid fa-clock"></i> ${data.duration}</p>
            </div>
            <div>
                <h3>Technologies</h3>
                <div class="head-detail-item">
                    <p><i class="${data.html}"></i> Html</p>
                    <p><i class="${data.javascript}"></i> Javascript</p>
                    <p><i class="${data.css}"></i> Css</p>
                    <p><i class="${data.react}"></i> React Js</p>
                </div> 
            </div>
        </div>
      </div>   
</div>

<div class="isi-blog">
  <p>${data.description}</p>
</div>`;
  });
}

// DATE
function getFullTime(time) {
  const date = time.getDate();
  const monthIndex = time.getMonth();
  const year = time.getFullYear();
  let hour = time.getHours();
  let minute = time.getMinutes();  

  if (hour < 10 ){
    hour = '0' + hour;
  }

  if (minute < 10){
    minute = '0' + minute;
  }


  const fullTime = `${date} ${month[monthIndex]} ${year} ${hour}:${minute} WIB`;

  return fullTime;
}

getFullTime(new Date());

// DISTANCE TIME
function getDistanceTime(time) {
  const timeNow = new Date();
  const timePost = new Date(time);

  const distance = timeNow - timePost;

  const milisecondsInDay = 1000 * 60 * 60 * 24;
  const distanceDay = Math.floor(distance / milisecondsInDay);

      if (distanceDay >= 1) {
        return `${distanceDay} days ago`;
      } else {
        const milisecondsInHour = 1000 * 60 * 60;
        const distanceHour = Math.floor(distance / milisecondsInHour);

        if (distanceHour >= 1) {
          return `${distanceHour} hours ago`;
        } else {
          const milisecondsInMinute = 1000 * 60;
          const distanceMinute = Math.floor(distance / milisecondsInMinute);

          if (distanceMinute >= 1) {
            return `${distanceMinute} minutes ago`;
          } else {
            const milisecondsInSeconds = 1000;
            const distanceSeconds = Math.floor(distance / milisecondsInSeconds);
            return `${distanceSeconds} seconds ago`;
          }
        }
      }
    }

// DURATION TIME
function difference(date1, date2) {  
  const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    day = 1000*60*60*24;
  return(date2utc - date1utc)/day
}

setInterval(() => {
  renderProjects();
}, 1000);

// setTimeout(() => {
//   alert('Selamat Pagi 👨🏻‍💻');
// }, 5000);



