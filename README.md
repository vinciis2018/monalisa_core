# By Vinciis
## npm React
### Monalisa is the flagship API by Vinciis for affliated advertising on web assets. for using, install the package by using

```JavaScript
npm i tsmona
```
then in your react code, import the package and use as this

```JavaScript
import {Monalisa} from 'tsmona';
```
and call the Monalisa component in a div of your react app

```JavaScript
 <div>
   <Monalisa screen={screenId} monaName={monaName} />
 </div>
```
for changing the size of the component, use a css class and call the api within it...

```JavaScript
  <div className="container">
    <Monalisa screen={screenId} monaName={monaName}/>
  </div>
```

## Wordpress

copy the folder Monalisa to your wordpress website's plugin directory

```JavaScript
example_website/app/public/wp-content/plugins/
```

then open the folder in vscode

```JavaScript
cd example_website/app/public/wp-content/plugins/widget
```

now install dependencies and build the application in the "widget" folder

```JavaScript
npm i && npm run build
```
go to you wordpress admin panel and click on "Plugins" tab in the sidebar to see the Monalisa plugin and click on activate

if all goes well,

go the the page you want to add the "Mona-Window", add shortcode from the add block option and time the following in the shortcode block input

```JavaScript
[erw-monalisa]
```

for more details and for getting your screenId by contacting itisvinciis@gmail.com
