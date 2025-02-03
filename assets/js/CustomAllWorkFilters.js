


class FilterTemplate {
    constructor(name = "headingname", namealt1="alt1", namealt2="alt2", desc = "temp desc", filename=".html", thumbnail="temp", date="") 
    {
        this.name = name;
        this.namealt1 = namealt1;
        this.namealt2 = namealt2;
      this.desc = desc;
      this.filename = filename;
      this.thumbnail = thumbnail;
      this.date = date;
    }
  
  }
  
const WorkPieces = {};

function Init()
{
    return new Promise(function(resolve, reject) {
        
        fetch('/WorkPieces.csv')
        .then(response => response.text())
        .then(csvContent => {
          processCSV(csvContent);
          resolve();
        })
        .catch(error => {
          console.error('Error loading CSV file:', error);
        });
        
      });
  

}

function processCSV(csvContent) {
    const lines = csvContent.split('\n');
  
    for (let i = 1; i < lines.length; i++) 
    {
      const line = lines[i].trim();
      if (line !== '') 
      {
        const fields = line.split(',');

        const workPiece = new FilterTemplate(fields[0], fields[1], fields[2], fields[3],fields[4],fields[5], fields[6]);
        WorkPieces[fields[0]] = workPiece;
      }
    }
  }


function intern_genWorkArticle(name = "HeadingName", desc = "temp desc.", filename = ".html", thumbnail = "temp", date="") 
{
    
    return `
    <article>
        <a href="`+filename+`" class="image"><img src="`+thumbnail+`" alt="" /></a>
        <h3 class="major" style="text-align:center;">`+name+`</h3>
        <p>`+desc+`</p>
        <a href="`+filename+`" class="special">View project</a>
    </article>
    `;
}

function GenerateArticle(keyname) 
{
    var name = WorkPieces[keyname].name;
    var desc = WorkPieces[keyname].desc;
    var srcfile = WorkPieces[keyname].filename;
    var thumbnail = WorkPieces[keyname].thumbnail;
    var date = WorkPieces[keyname].date;

    return intern_genWorkArticle(name, desc, srcfile, thumbnail, date);
}
function ReturnAllFilters(isOnIndex = false) 
{
    var result = [ `
<section class="features">
    `+GenerateArticle("Forza Horizon 5")+`
    `+GenerateArticle("Pixelate")+`
    `+GenerateArticle("TV-World")+`
    `+GenerateArticle("Rose")+`
    `+GenerateArticle("Amaurosis")+`
    `+GenerateArticle("Mario Bros Arcade")+`
    <!--`+GenerateArticle("Pacman")+`-->
    <!--`+GenerateArticle("OpenGL1.1 Project")+`-->
    `+GenerateArticle("DirectX11 Project")+`
    `+GenerateArticle("Staffsverse")+`
    <!--`+GenerateArticle("Arcadia The Claw")+`-->
    <!--`+GenerateArticle("Packing Panic")+`-->
    

</section>
`];
    return result;
}

/*
`+GenerateArticle("Physics Library")+`
    `+GenerateArticle("CSharp Chat Room")+`
    `+GenerateArticle("AI Project")+`
    `+GenerateArticle("Plugnet")+`
    */

function ReturnMainFeatured(uniqueID) 
{
    const pieces = [ WorkPieces["Pixelate"], WorkPieces["TV-World"], WorkPieces["Rose"], WorkPieces["Amaurosis"]];
    var result = [ ` 
    
    
    
    <!-- Container for the image gallery -->
    <div id ="`+uniqueID+`>
    <div class="container">
    <!-- Image text -->
      
      <!-- Full-width images with number text -->
      <div class="mySlides">
      <img src="`+pieces[0].thumbnail+`" class="imgdemo">
      </div>
    
      <div class="mySlides">
          <img src="`+pieces[1].thumbnail+`" class="imgdemo">
      </div>
    
      <div class="mySlides">
          <img src="`+pieces[2].thumbnail+`" class="imgdemo">
          </div>
    
      <div class="mySlides">
          <img src="`+pieces[3].thumbnail+`" class="imgdemo">
          </div>
    
      <div class="caption-container" style=" display: flex;
      justify-content: space-between;">
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <p style="margin:0;" id="caption"></p>
        <!-- Next and previous buttons -->
        <a class="next" onclick="plusSlides(1)">&#10095;</a>

      </div>
    
      <div id="imgdemocaption" class="imgdemocaption"></div>
    
      <!-- Thumbnail images -->
      <div class="row" style="display:block;margin-left: 0px;">
        <div class="columnslideshow">
          <img class="demo cursor" src="`+pieces[0].thumbnail+`" style="width:100%" onclick="currentSlide(1)" alt="`+pieces[0].name+`">
        </div>
        <div class="columnslideshow">
          <img class="demo cursor" src="`+pieces[1].thumbnail+`" style="width:100%" onclick="currentSlide(2)" alt="`+pieces[1].name+`">
        </div>
        <div class="columnslideshow">
          <img class="demo cursor" src="`+pieces[2].thumbnail+`" style="width:100%" onclick="currentSlide(3)" alt="`+pieces[2].name+`">
        </div>
        <div class="columnslideshow">
          <img class="demo cursor" src="`+pieces[3].thumbnail+`" style="width:100%" onclick="currentSlide(4)" alt="`+pieces[3].name+`">
        </div>
      </div>
    </div> 
  </div>

    
`];

    return result;
}




function ReturnIndustryWork() 
{
    const pieces = [ WorkPieces["Forza Horizon 5"]];
    var result = [ ` 
    
    <!-- Container for the image gallery -->
    <div class="container">
      <h3 style="margin:0; text-align:center" id="IndustryCaption">`+pieces[0].namealt1+`</h3>
      
      <img src="`+pieces[0].thumbnail+`" class="imgdemo">
      </div>
      
      <div id="Industryimgdemocaption" class="imgdemocaption"> `+ pieces[0].desc+` 
      <br>
      <p1>(`+ pieces[0].date +`)</p1>
      <br>
      <a href="`+ pieces[0].filename +`" class ="small button" style="text-align:center;margin-top: 5px;">View</a>
      </div>

    </div>
    
    
`];

    return result;
}