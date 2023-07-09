


class FilterTemplate {
    constructor(name = "headingname", namealt1="alt1", namealt2="alt2", desc = "temp desc", filename=".html", thumbnail="temp") 
    {
        this.name = name;
        this.namealt1 = namealt1;
        this.namealt2 = namealt2;
      this.desc = desc;
      this.filename = filename;
      this.thumbnail = thumbnail;
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

        const workPiece = new FilterTemplate(fields[0], fields[1], fields[2], fields[3],fields[4],fields[5]);
        WorkPieces[fields[0]] = workPiece;
      }
    }
  }

function filterTemplate(name = "HeadingName", desc = "temp desc.", filename = ".html", thumbnail = "temp", indexGuard = "") 
{
    
    return `
    <article>
        <a href="`+indexGuard+filename+`" class="image"><img src="`+thumbnail+`" alt="" /></a>
        <h3 class="major" style="text-align:center;">`+name+`</h3>
        <p>`+desc+`</p>
        <a href="`+indexGuard+filename+`" class="special">View project</a>
    </article>
    `;
}

function intern_genWorkArticle(name = "HeadingName", desc = "temp desc.", filename = ".html", thumbnail = "temp") 
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


function ReturnPixelateArticle(isOnIndex = false) 
{
    var indexGuard = "";
    if(isOnIndex)
    {
        indexGuard = "pages/"
    }

    var name = "Pixelate";
    var desc = "Pixelate is a game engine that is used to create 2D games. This project is still in development with the hopes of one day creating games with Pixelate. Currently Pixelate is being developed for desktop PC platforms with hopes to support other platforms in the future";
    var srcfile = "work-pixelate.html";
    var thumbnail = "/images/work/pixelate-preview-shrunk.jpg";

    return filterTemplate(name, desc, srcfile, thumbnail, indexGuard);
}

function ReturnTvworldArticle(isOnIndex = false) 
{
    var indexGuard = "";
    if(isOnIndex)
    {
        indexGuard = "pages/"
    }

    var name = "TV-World";
    var desc = "TV-World was a college project where we had to simulate a small studio team. This game was the first project I worked on, where I managed and programmed a game to completion within a team over a substantial amount of time.";
    var srcfile = "work-tvworld.html";
    var thumbnail = "../images/work/tvworld-preview.jpg";

    return filterTemplate(name, desc, srcfile, thumbnail, indexGuard);

}

function ReturnPacmanArticle(isOnIndex = false) 
{

    var indexGuard = "";
    if(isOnIndex)
    {
        indexGuard = "pages/"
    }

    var name = "Pacman";
    var desc = "For my first assignment in University, I created Pacman in C++. The aim was to try and recreate Pacman as close as I can while implementing my own ideas to the game.";
    var srcfile = "work-pacman.html";
    var thumbnail = "../images/work/pacman-preview.jpg";

    return filterTemplate(name, desc, srcfile, thumbnail, indexGuard);
}

function ReturnMBArcadeArticle(isOnIndex = false) 
{

    var indexGuard = "";
    if(isOnIndex)
    {
        indexGuard = "pages/"
    }

    var name = "Mario Bros";
    var desc = "For an assignment for University, I recreated nearly the entirety of Mario Bros arcade in C++ using SDL 2.";
    var srcfile = "work-mbarcade.html";
    var thumbnail = "../images/work/mbarcade-preview.png";

    return filterTemplate(name, desc, srcfile, thumbnail, indexGuard);

}

function ReturnOpenGLOneArticle(isOnIndex = false) 
{
    var indexGuard = "";
    if(isOnIndex)
    {
        indexGuard = "pages/"
    }

    var name = "OpenGL 1.1 Renderer";
    var desc = "For an assignment for University, I created an OpenGL sandbox application. The version of OpenGL used was 1.1.";
    var srcfile = "work-opengl1dot1.html";
    var thumbnail = "../images/work/gl1-preview.jpg";

    return filterTemplate(name, desc, srcfile, thumbnail, indexGuard);
    
}

function ReturnRoseArticle(isOnIndex = false) 
{

    var indexGuard = "";
    if(isOnIndex)
    {
        indexGuard = "pages/"
    }

    var name = "Rose";
    var desc = "A vulkan renderer created by me. The aim of this renderer is to create a PBR IBL environment";
    var srcfile = "work-rose.html";
    var thumbnail = "../images/work/rose-preview.jpg";

    return filterTemplate(name, desc, srcfile, thumbnail, indexGuard);
}

function ReturnStaffsverseArticle(isOnIndex = false) 
{

    var indexGuard = "";
    if(isOnIndex)
    {
        indexGuard = "pages/"
    }

    var name = "Staffsverse";
    var desc = "Staffsverse was a project led by Staffordshire University students where we were briefed to create a metaverse-like application to introduce new students to the university's campus.";
    var srcfile = "work-staffsverse.html";
    var thumbnail = "../images/work/staffsverse-preview.jpg";

    return filterTemplate(name, desc, srcfile, thumbnail, indexGuard);
}

function ReturnArcadiaArticle(isOnIndex = false) 
{

    var indexGuard = "";
    if(isOnIndex)
    {
        indexGuard = "pages/"
    }

    var name = "Arcadia The Claw";
    var desc = "A game made for a college game jam. We were against 3 other teams and made this in 2 weeks.";
    var srcfile = "work-arcadiatheclaw.html";
    var thumbnail = "../images/work/arcadiatheclaw/arcadiatheclaw-preview1.jpg";

    return filterTemplate(name, desc, srcfile, thumbnail, indexGuard);

}

function ReturnChonkArticle(isOnIndex = false) 
{

    var indexGuard = "";
    if(isOnIndex)
    {
        indexGuard = "pages/"
    }

    var name = "Chonk Simulator";
    var desc = "Made for Ludum Dare 41. Chonk Simulator is an endless arcade farming game where you must feed a greedy creature that has taken over your home. Don’t let him get too hungry, otherwise he’ll die.";
    var srcfile = "work-plugnet.html";
    var thumbnail = "../images/work/bg2.jpg";

    return filterTemplate(name, desc, srcfile, thumbnail, indexGuard);

}

function ReturnPackingPanicArticle(isOnIndex = false) 
{
    var indexGuard = "";
    if(isOnIndex)
    {
        indexGuard = "pages/"
    }

    var name = "Packing Panic";
    var desc = "Packing panic was a game created for a university game jam where we had to work in a team to create a game within four days.";
    var srcfile = "work-packingpanic.html";
    var thumbnail = "../images/work/packingpanic/packingpanic-preview1.jpg";

    return filterTemplate(name, desc, srcfile, thumbnail, indexGuard);
}

function ReturnPlugnetArticle(isOnIndex = false) 
{

    var indexGuard = "";
    if(isOnIndex)
    {
        indexGuard = "pages/"
    }

    var name = "Plugnet";
    var desc = "A C++ library that applications can use to create game client and servers.";
    var srcfile = "work-plugnet.html";
    var thumbnail = "../images/work/bg2.jpg";

    return filterTemplate(name, desc, srcfile, thumbnail, indexGuard);
}


function GenerateArticle(keyname) 
{
    var name = WorkPieces[keyname].name;
    var desc = WorkPieces[keyname].desc;
    var srcfile = WorkPieces[keyname].filename;
    var thumbnail = WorkPieces[keyname].thumbnail;

    return intern_genWorkArticle(name, desc, srcfile, thumbnail);
}
function ReturnAllFilters(isOnIndex = false) 
{
    var result = [ `
<section class="features">
    `+GenerateArticle("Pixelate")+`
    `+GenerateArticle("TV-World")+`
    `+GenerateArticle("Pacman")+`
    `+GenerateArticle("Mario Bros Arcade")+`
    `+GenerateArticle("OpenGL1.1")+`
    `+GenerateArticle("Rose")+`
    `+GenerateArticle("Staffsverse")+`
    `+GenerateArticle("Arcadia The Claw")+`
    `+GenerateArticle("Packing Panic")+`

</section>
`];
    return result;
}


/*function ReturnMainFeatured() 
{
    var result = [ `
<section class="features">
    `+ReturnPixelateArticle(true)+`
    `+ReturnTvworldArticle(true)+`
    `+ReturnRoseArticle(true)+`
    `+ReturnMBArcadeArticle(true)+`
</section>
`];*/

function ReturnMainFeatured() 
{

    const pieces = [ WorkPieces["Pixelate"], WorkPieces["TV-World"], WorkPieces["Rose"], WorkPieces["Mario Bros Arcade"]];
    var result = [ ` 
    
    
    <!-- Next and previous buttons -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <!-- Container for the image gallery -->
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
    
      <div class="caption-container">
        <p style="margin:0;" id="caption"></p>
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


    
`];

    return result;
}


