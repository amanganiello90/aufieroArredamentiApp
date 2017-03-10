# E-commerce furnishings App with Ionic 2

# Steps to use
* clone this repo
* npm install
* Then ```ionic build android``` or ```ionic build ios```
* If you want to view in local run ```ionic serve``` or ```ionic serve -l``` (for mobile lab view)

# Based on Ionic 2 


## web service REST call example:

```
 // call
    this.$http({
      url: endpoint, headers: { 'Authorization': 'Basic ' + btoa(login + ':' + pwd) }
      , method: "POST", data: mydata
    })
      .then(response => {
        let codeRes= response.data['code'];
        this.$scope['StatusResponse'] = response.status;
        this.$scope['CodeResponse'] = codeRes;
        return;
      }).catch(error => {
        this.$scope['StatusResponse'] = error.message;
        return;
      })

    return;
  };

  
For ionic file transfer plugin guide:
https://github.com/apache/cordova-plugin-file-transfer
https://ionicframework.com/docs/v2/native/transfer/

```