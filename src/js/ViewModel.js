const createViewModel = (cardObject) => {
    const element =
    `
  <div class="card">
    <div class="card-inner">
        <div class="card-front" style="background-image:linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.81)), url('${cardObject.imagePath}')" mix-blend-mode:"multiply">
          <div class="caption">
            <p id="name">${cardObject.name}</p>
            <p id="position">${cardObject.profession}</p>
          </div>
        </div>
  
        <div class="card-back">
          <div class="info"><span>Phone:</span> <br>${cardObject.phoneNumber} </div>
          <div class="info">${cardObject.roomNumber}</div>
          <div class="info"><span>Website (URL):</span> ${cardObject.webUrl}</div>
          <div class="info"><span>Email:</span> ${cardObject.email}</div>
          <div class="info" id="skills">${cardObject.description}</div>
          <div><a src=""></a><button type="button" onclick="location.href = 'http://${cardObject.readMoreLink}';">Read More</a></button></div>
        </div>
  
    </div>
   </div>
   `


   return element;
};

export default createViewModel;
