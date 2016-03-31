#   Web framework based off Bootstrap

### Installation

Node
```
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
```

npm     
`sudo apt-get install npm`

Gulp        
`npm install --global gulp-cli` - installs gulp globally

`npm install` - to install dependencies before running gulp commands

`gulp` - runs the default gulp command(gulp watch)

### Gulp commands

`gulp watch` - to watch for changes to SASS, HTML and update website on save.

`gulp build` - builds the full distribution, with compressed CSS, JS, Images(Also runs gulp clean).

`gulp clean` - removes any old files from the distribution.

### Currently Added

*   Normalization
*   Defaults styling for common HTML elements for easier usage with the framework
*   Grid system

### Currently working on in branch

*   Articles

### Todo

*   create a more generic article Style
*   remove section-line. Move to website css
*   h1,h2,h3 tags
*   Navbar
*   Side Navbar
*   Buttons
*   Cards
*   Dropdowns
*   Search bar
*   Tables
*   Documentation website
