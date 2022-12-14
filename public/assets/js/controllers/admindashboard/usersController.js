///////////// THIS IS THE USE CONTROLLER///////
///// THIS CONTROLS EVERY ACTIVITY ON THE USER PAGE
/////////////////////////

module.controller("usersController", [
  "$scope",
  "$sce",
  "$http",
  "infogathering",
  "$routeParams",
  "$localStorage",
  "$sessionStorage",
  function (
    $scope,
    $sce,
    $http,
    datagrab,
    $routeParams,
    $localStorage,
    $sessionStorage
  ) {
    $scope.fieldcounter = 1;
    //$('.loader').show();
    var url = window.location.href;
    if (url.indexOf("#") > 1) {
      var page = window.location.href.split("#");
      var pager = page[1].split("=").pop();

      if (
        pager == "" ||
        pager == "undefined" ||
        pager == null ||
        pager == "0"
      ) {
        pager = "1";
      }
    } else {
      pager = "1";
    }

    $scope.dirlocation = datagrab.completeUrlLocation;
    $scope.currentPage = pager;
    $scope.pageSize = 10;
    $scope.admin_data = $localStorage.user_data;
    $scope.admin_token = $localStorage.user_token;
    setTimeout(function () {
      $scope.$apply();
    }, 0);

    // $scope.loader_control = function(e){
    //   $(e).hide(1000);
    // };

  /*
    $scope.get_all_users = function () {
      $("#user_loader").show();
      $(".result").hide();
      $.ajax({
        url: $scope.dirlocation + "adminapi/get_all_users",
        type: "GET",
        async: true,
        cache: false,
        contentType: false,
        headers: {
          "tega-authenticate":
            $scope.admin_token + ":email:" + $scope.admin_data.email,
        },
        processData: false,
        success: function (result) {
          // alert(JSON.stringify(result));
          console.log(result);

          var response = JSON.stringify(result);
          var parsed = JSON.parse(response);
          var msg = angular.fromJson(parsed);
          $("#user_loader").hide(500);

          if (msg.status == "1") {
            $scope.all_users = msg.data;
            $scope.$apply();
            $(".result").show();
          } else {
            $(".result").html(msg.message);
            $(".result").addClass("alert alert-info");
            $(".result").show();
            setTimeout(() => {
              $(".result").removeClass("alert alert-info");
              $(".result").hide("500");
            }, 3000);
          }
        },
      });
    };
*/

  tinyMCE.init({
      selector : "text1"
    });
    $scope.tinymceOptions = {
      plugins: 'image link code',
    toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | image',
    convert_urls : false,
    images_upload_url: $scope.dirlocation + "api/upload",
    automatic_uploads : false,
     images_upload_handler: function (blobInfo, success, failure) {
      var xhr, formData;
     xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open('POST', $scope.dirlocation + "api/upload");
   
    xhr.onload = () => {
      var json;
       
      
        if (xhr.status != 200 ) {
            failure('HTTP Error: ' + xhr.status);
            return;
        }
         var response = JSON.stringify(xhr.responseText.replace(/\\/g, ''));
         var parsed = JSON.parse(response);
         json = angular.fromJson(parsed);
       // json = JSON.parse(xhr.responseText);
       // json = xhr.responseText.replace(/\\/g, '');

    
        if (!json || typeof json.file_path != 'string') {
            failure('Invalid JSON: ' + xhr.responseText);
            return;
        }
       
        success(json.file_path);
    };
    formData = new FormData();
    formData.append('file', blobInfo.blob(), blobInfo.filename());
    xhr.send(formData);
     }
    };
    $scope.model = "";
    $scope.enable_or_disable = function (code, user, $index) {
      $(".user_loader_"+user.id).show();
      $(".icon_"+user.id).hide();
      var formData = new FormData();

      formData.append("status", code);
      formData.append("seller_id", user.seller_id);
      $.ajax({
        url: $scope.dirlocation + "adminapi/disable_enable_account",
        data: formData,
        type: "POST",
        async: true,
        cache: false,
        contentType: false,
        headers: { "tega-authenticate": $scope.admin_token },
        processData: false,
        success: function (result) {
          console.log(result);

          var response = JSON.stringify(result);
          var parsed = JSON.parse(response);
          var msg = angular.fromJson(parsed);
          $(".user_loader_"+user.id).hide(500);
          $(".icon_"+user.id).show(500);
          if (msg.status == "1") {
            user.status = code;
            $scope.$apply();
            $(".result").html(msg.message);
            $(".result").addClass("alert alert-info");
            $(".result").show(500);

            setTimeout(() => {
              $(".result").hide("500");
              $(".result").removeClass("alert alert-info");
            }, 3000);
          } else {
            $(".result").html(msg.message);
            $(".result").addClass("alert alert-info");
            $(".result").show(500);

            setTimeout(() => {
              $(".result").hide("500");
              $(".result").removeClass("alert alert-info");
            }, 3000);
          }
        },
      });
    };

    $scope.localStorage_get = function (key) {
      $scope[key] = $localStorage[key];
     // alert(JSON.stringify($localStorage[key]));
    };

    $scope.localStorage_save = function (key, value, url) {
      $localStorage[key] = value;
      if (url != "") {
        $scope.go_to_url(url);
      }
    };
    $scope.go_to_url = function (url) {
      window.location.href = $scope.dirlocation + "admindashboard/" + url;
    };

    //* more data into modal window
    $scope.append_modal_info = function (value) {
    
      $scope.info = value;
    };

    $scope.fetch_all_blogs_of_admin = function (admin_id) {
      $.ajax({
        url:
          $scope.dirlocation +
           "api/fetch_all_blog_agent?id=" +admin_id,
          
        type: "GET",
        async: true,
        cache: false,
        contentType: "application/json",
        headers: { "tega-authenticate": $scope.admin_token },
        processData: false,
        success: function (result) {
          console.log(result);

          var response = JSON.stringify(result);
          var parsed = JSON.parse(response);
          var msg = angular.fromJson(parsed);
          console.log(msg);
          $(".loader").hide();
          if (msg.status == "1") {
            $scope.all_user_ads = msg.data;
            $scope.rowCount = msg.rowCounts;
            $scope.$apply();
          } else {
            $(".result").html(msg.message);
            $(".result").addClass("alert alert-info");
            $(".result").show();
            setTimeout(() => {
              $(".result").removeClass("alert alert-info");
              $(".result").hide("500");
            }, 3000);
          }
        },
      });
    };
    $scope.delete_user_account_and_ads = function (seller_id) {
      // alert($scope.admin_token);
      // return;
      $.ajax({
        url:
          $scope.dirlocation +
          "adminapi/delete_user_account_and_ads?seller_id=" +
          seller_id,
        type: "GET",
        async: true,
        cache: false,
        contentType: false,
        headers: { "tega-authenticate": $scope.admin_token },
        processData: false,
        success: function (result) {
          console.log(result);
          
          var response = JSON.stringify(result);
          var parsed = JSON.parse(response);
          var msg = angular.fromJson(parsed);
          // alert(msg);
          // alert(msg.status);
          $(".loader").hide();
          if (msg.status == "1") {
            $scope.get_all_users();
            $scope.$apply();
            $(".result").show();
          } else {
            $(".result").html(msg.message);
            $(".result").show();
          }
        },
      });
    };
  },
]);
