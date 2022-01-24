## Monalisa 
#### By Vinciis
Monalisa is the flagship API by Vinciis for affliated advertising on web assets.
for using, install the package by using 

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
   <Monalisa screen={(screenId)} />
 </div>
```

for changing the size of the component, use a css class and call the api within it... 

```JavaScript
  <div className="container">
    <Monalisa props={(screenId)} />
  </div>
```
for more details and for getting your screenId by contacting itisvinciis@gmail.com
