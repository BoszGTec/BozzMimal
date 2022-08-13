const home_zone = '<div class="loop-ct">\n\
  <div class="loop">\n\
    {{loop-button-1}}\n\
  </div>\n\
</div>\n\
\n\
<div class="flex j-ct-center a-it-center" style="height:85%;">\n\
   <div style="text-align: center;">\n\
     <a href="https://boszgtec.github.io/BozzMimal/">\n\
       <img height="200px" src="https://raw.githubusercontent.com/BoszGTec/BozzMimal/main/image/BozzMimalLogo.png" />\n\
     </a>\n\
     <center>\n\
       <h1>{{title}}</h1>\n\
       <p>{{desc}}</p>\n\
     </center>\n\
   </div>\n\
 </div>\n\
\n\
<div class="loop-ct">\n\
  <div class="loop2">\n\
    {{loop-button-2}}\n\
  </div>\n\
</div>\n'

const download_zone = '<div style="min-height:100%" id="usage" class="flex j-ct-center">\n\
  <div style="width:90%;">\n\
    <h1>Usage</h1>\n\
    <p>Just Insert Link Tag</p>\n\
    {{download-pc}}\n\
    {{download-phone}}\n\
  </div>\n\
</div>\n'

const download_pc = '<div class="flex small-hide" style="gap: 20px;">\n\
  <div style="width:50%;">\n\
    <h2>Quick start</h2>\n\
    <p>add html tag<code>link rel="stylesheet" href={link}</code>in html.</p>\n\
    <pre>\n\
<code style="white-space: break-spaces;">{{code}}</code>\n\
    </pre>\n\
  </div>\n\
  <div style="width:50%;">\n\
    {{file-link}}\n\
  </div>\n\
</div>\n'

const download_phone = '<div class="med-hide large-hide">\n\
   <h2>Quick start</h2>\n\
   <p>add html tag<code>&lt;link rel="stylesheet" href="{link}"&gt;</code>in html.</p>\n\
   <pre>\n\
<code style="white-space: break-spaces;">{{code}}</code>\n\
    </pre>\n\
</div>\n\
<div class="med-hide large-hide">\n\
    {{file-link}}\n\
</div>\n'

const example = '<div id="example" class="flex j-ct-center">\n\
    <div style="width:90%">\n\
      <h1>Example</h1>\n\
      {{example_element}}\n\
    </div>\n\
  </div>\n
'
