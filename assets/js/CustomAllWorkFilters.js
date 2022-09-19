function ReturnPixelateArticle() 
{
    /*        <b><u><span style="color:orange;">In development</span>
    <span>-</span>
    <span style="color:gray">Personal</span></b></u>*/
    return `
    <article>
        <a href="work-pixelate.html" class="image"><img src="../images/work/pixelate-preview-shrunk.jpg" alt="" /></a>
        <h3 class="major">Pixelate</h3>
        <p>Pixelate is a game engine that is used to create 2D games. This project is still in development with the hopes of one day creating games with Pixelate. Currently Pixelate is being developed for desktop PC platforms with hopes to support other platforms in the future.</p>
        <a href="work-pixelate.html" class="special">View project</a>
    </article>
    `;
}

function ReturnTvworldArticle() 
{
    return `
    <article>
        <a href="work-tvworld.html" class="image"><img src="../images/work/tvworld-preview.jpg" alt="" /></a>
        <h3 class="major">TV-World</h3>
        <p>TV World was a college project where we had to simulate a small studio team. This was the first project I worked on where I managed and program a game to completion within a team.</p>
        <a href="work-tvworld.html" class="special">View project</a>
    </article>
    `;
}

function ReturnPacmanArticle() 
{
    return `
    <article>
         <a href="work-pacman.html" class="image"><img src="../images/work/pacman-preview.jpg" alt="" /></a>
         <h3 class="major">Pacman</h3>
         <p>For my first assignment in University, I created Pacman in C++. The aim was to try and recreate Pacman as close as I can while implementing my own ideas to the game.</p>
        <a href="work-pacman.html" class="special">View project</a>
    </article>
    `;
}

function ReturnMBArcadeArticle() 
{
    return `
    <article>
        <a href="work-mbarcade.html" class="image"><img src="../images/work/mbarcade-preview.png" alt="" /></a>
        <h3 class="major">Mario Bros</h3>
        <p>For an assignment for University, I recreated nearly the entirety of Mario Bros arcade in C++ using SDL 2.</p>
        <a href="work-mbarcade.html" class="special">View project</a>
    </article>
    `;
}

function ReturnOpenGLOneArticle() 
{
    return `
    <article>
        <a href="work-opengl1dot1.html" class="image"><img src="../images/work/gl1-preview.png" alt="" /></a>
        <h3 class="major">OpenGL 1.1 Renderer</h3>
        <p>For an assignment for University, I created an OpenGL sandbox application. The version of OpenGL used was 1.1.</p>
        <a href="work-opengl1dot1.html" class="special">View project</a>
    </article>
    `;
}

function ReturnRoseArticle() 
{
    return `
    <article>
    <a href="work-rose.html" class="image"><img src="../images/work/rose-preview.jpg" alt="" /></a>
    <h3 class="major">Rose</h3>
    <p>A vulkan renderer created by me. The aim of this renderer is to create a PBR IBL environment</p>
    <a href="work-rose.html" class="special">View project</a>
</article>
    `;
}

function ReturnStaffsverseArticle() 
{
    return `
    <article>
        <a href="work-staffsverse.html" class="image"><img src="../images/work/staffsverse-preview.jpg" alt="" /></a>
        <h3 class="major">Staffsverse</h3>
        <p>Staffsverse was a project led by Staffordshire University students where we were briefed to create a metaverse-like application to introduce new students to the university's campus.</p>
        <a href="work-staffsverse.html" class="special">View project</a>
    </article>
    `;
}

function ReturnArcadiaArticle() 
{
    return `
    <article>
    <a href="work-arcadiatheclaw.html" class="image"><img src="../images/work/arcadiatheclaw/arcadiatheclaw-preview1.jpg" alt="" /></a>
    <h3 class="major">Arcadia The Claw</h3>
    <p>A game made for a college game jam. We were against 3 other teams and made this in 2 weeks. </p>
    <a href="work-arcadiatheclaw.html" class="special">View project</a>
</article>
    `;
}

function ReturnChonkArticle() 
{
    return `
    <article>
        <a href="work-plugnet.html" class="image"><img src="../images/bg2.jpg" alt="" /></a>
        <h3 class="major">Chonk Simulator</h3>
        <p>Made for Ludum Dare 41. Chonk Simulator is an endless arcade farming game where you must feed a greedy creature that has taken over your home. Don’t let him get too hungry, otherwise he’ll die.</p>
        <a href="work-plugnet.html" class="special">View project</a>
    </article>
    `;
}

function ReturnPackingPanicArticle() 
{
    return `
    <article>
        <a href="work-packingpanic.html" class="image"><img src="../images/work/packingpanic/packingpanic-preview1.jpg" alt="" /></a>
        <h3 class="major">Packing Panic</h3>
        <p>Temp.</p>
        <a href="work-packingpanic.html" class="special">View project</a>
    </article>
    `;
}

function ReturnPlugnetArticle() 
{
    return `
    <article>
        <a href="work-plugnet.html" class="image"><img src="../images/bg2.jpg" alt="" /></a>
        <h3 class="major">Plugnet</h3>
        <p>A C++ library that applications can use to create game client and servers.</p>
        <a href="work-plugnet.html" class="special">View project</a>
    </article>
    `;
}

function ReturnAllFilters() 
{
    var result = [ `
<section class="features">
    `+ReturnPixelateArticle()+`
    `+ReturnTvworldArticle()+`
    `+ReturnPacmanArticle()+`
    `+ReturnMBArcadeArticle()+`
    `+ReturnOpenGLOneArticle()+`
    `+ReturnRoseArticle()+`
    `+ReturnStaffsverseArticle()+`
    `+ReturnArcadiaArticle()+`
    `+ReturnPackingPanicArticle()+`

</section>
`];
//https://accessdenied.itch.io/packing-panic
    return result;
}

function ReturnMainFeatured() 
{
    var result = [ `
<section class="features">
    `+ReturnPixelateArticle()+`
    `+ReturnTvworldArticle()+`
    `+ReturnRoseArticle()+`
    `+ReturnMBArcadeArticle()+`
</section>
`];

    return result;
}


function ReturnInDev() 
{
    var result = [ `
    <section class="features">
        `+ReturnPixelateArticle()+`
        `+ReturnRoseArticle()+`
    </section>
    `];

    return result;
}




function ReturnCompleted() 
{
    var result = [ `
    <section class="features">
        `+ReturnTvworldArticle()+`
        `+ReturnPacmanArticle()+`
        `+ReturnMBArcadeArticle()+`
        `+ReturnOpenGLOneArticle()+`
    </section>
    `];

    return result;
}

function ReturnPersonal() 
{
    var result = [ `
<section class="features">
    `+ReturnPixelateArticle()+`
    `+ReturnPacmanArticle()+`
    `+ReturnMBArcadeArticle()+`
    `+ReturnOpenGLOneArticle()+`
    `+ReturnRoseArticle()+`
</section>
`];

    return result;
}

function ReturnGamejams() 
{
    var result = [ `
<section class="features">
   
</section>
`];

    return result;
}


function ReturnInDev_Education() 
{
    var result = [ `
    <section class="features">
        `+ReturnPixelateArticle()+`
        `+ReturnRoseArticle()+`
    </section>
    `];
    return result;
}

function ReturnInDev_Gamejam() 
{
    var result = [ `
    <section class="features">
    </section>
    `];

    return result;
}


function ReturnCompleted_Education() 
{
    var result = [ `
    <section class="features">
        `+ReturnTvworldArticle()+`
        `+ReturnPacmanArticle()+`
        `+ReturnMBArcadeArticle()+`
        `+ReturnOpenGLOneArticle()+`
    </section>
    `];

    return result;
}

function ReturnCompleted_GameJam() 
{
    var result = [ `
    <section class="features">
    </section>
    `];

    return result;
}
