"use strict";

const ActivityType = {
  "Physician": "Physician",
  "Colonoscopy": "Colonoscopy",
  "Tomography": "Tomography",
  "CEA": "CEA",
  "PhysicianAndCEA": "PhysicianAndCEA",
}
Object.freeze(ActivityType);


function calculatex(input) {
  switch (input.Type) {
    case "Colorectal Cancer":
      return colorectal(input);
    case "Gastric Cancer":
      return gastric(input);
    default:
      break;
  }
};


function convertToDate(dateInput) {
  var ps = dateInput.split('.');
  var opDate = new Date(parseInt(ps[2]), parseInt(ps[1]) - 1, parseInt(ps[0]));

  opDate.addMonth = function addMonth(month) {
    this.setMonth(this.getMonth() + month);
  };

  return opDate;
}

function Calendar() {
  this.Dates = [];

  this.AddDate = function (theob) {
    var newDate = new Date(theob.Date);
    var notes = (theob.Notes !== undefined ? "(" + theob.Notes + ")" : "");
    this.Dates.push({
      Date: newDate,
      ActivityType: theob.ActivityType,
      Notes: notes
    });
  }
}


function colorectal(input) {
  var calendar = new Calendar();
  var operationDate = convertToDate(input.OperationDate);

debugger;


  if (input.Stage == "1") {
    //op'tan bir ay sonra
    operationDate.addMonth(1);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Physician
    });


    //op'tan 3(aslında 4) ay sonra
    operationDate.addMonth(3);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Physician
    });

    //op'tan 6 ay sonra
    operationDate.addMonth(3);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Physician
    });

    //op'tan 9 ay sonra
    operationDate.addMonth(3);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Physician
    });


    //op'tan 1 yıl sonra
    operationDate.addMonth(3);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Physician
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Colonoscopy,
      Notes: "Sonucunuzda polip çıkarsa doktorunuzla görüşün"
    });


    //op'tan 1 yıl 3 ay sonra
    operationDate.addMonth(3);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Physician
    });


    //op'tan bir buçuk yıl sonra
    operationDate.addMonth(3);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Physician
    });


    //op'tan 1 yıl 9 ay sonra
    operationDate.addMonth(3);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Physician
    });


    //op'tan 2 yıl sonra
    operationDate.addMonth(3);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Physician
    });


    //op'tan 2 buçuk yıl sonra
    operationDate.addMonth(6);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Physician
    });


    //op'tan 3 yıl sonra
    operationDate.addMonth(6);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Physician
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Colonoscopy,
      Notes: "Sonucunuzda polip çıkarsa doktorunuzla görüşün"
    });

    //op'tan 3 buçuk yıl sonra
    operationDate.addMonth(6);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Physician
    });


    //op'tan 4 yıl sonra
    operationDate.addMonth(6);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Physician
    });

    //op'tan 4 buçuk yıl sonra
    operationDate.addMonth(6);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Physician
    });


    //op'tan 5 yıl sonra
    operationDate.addMonth(6);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Physician
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Colonoscopy,
      Notes: "Sonucunuzda polip çıkarsa doktorunuzla görüşün"
    });


    return calendar;
  } else if (input.Stage == "2, 3" || input.Stage == "4") {

    debugger;

    //op'tan bir ay sonra
    operationDate.addMonth(1);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Physician
    });


    //op'tan 3(aslında 4) ay sonra
    operationDate.addMonth(3);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.PhysicianAndCEA
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Colonoscopy,
      Notes: "Ameliyattan önce tam kolonoskopi yapılmadıysa"
    });

    //op'tan 6 ay sonra
    operationDate.addMonth(3);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.PhysicianAndCEA
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Tomography,
      Notes: "Doktor gerekli görürse"
    });


    //op'tan 9 ay sonra
    operationDate.addMonth(3);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.PhysicianAndCEA
    });


    //op'tan 1 yıl sonra
    operationDate.addMonth(3);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.PhysicianAndCEA
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Colonoscopy,
      Notes: "Ameliyattan önce tam kolonoskopi yapıldıysa ilk kolonoskopi bu tarihte yapılmalı"
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Tomography,
      Notes: "Doktor gerekli görürse"
    });


    //op'tan 1 yıl 3 ay sonra
    operationDate.addMonth(3);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.PhysicianAndCEA
    });


    //op'tan bir buçuk yıl sonra
    operationDate.addMonth(3);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.PhysicianAndCEA
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Tomography,
      Notes: "Doktor gerekli görürse"
    });

    //op'tan 1 yıl 9 ay sonra
    operationDate.addMonth(3);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.PhysicianAndCEA
    });


    //op'tan 2 yıl sonra
    operationDate.addMonth(3);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.PhysicianAndCEA
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Tomography,
      Notes: "Doktor gerekli görürse"
    });


    //op'tan 2 buçuk yıl sonra
    operationDate.addMonth(6);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.PhysicianAndCEA
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Tomography,
      Notes: "Doktor gerekli görürse"
    });



    //op'tan 3 yıl sonra
    operationDate.addMonth(6);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.PhysicianAndCEA
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Colonoscopy,
      Notes: "Sonucunuzda polip çıkarsa doktorunuzla görüşün"
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Tomography,
      Notes: "Doktor gerekli görürse"
    });

    //op'tan 3 buçuk yıl sonra
    operationDate.addMonth(6);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.PhysicianAndCEA
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Tomography,
      Notes: "Doktor gerekli görürse"
    });


    //op'tan 4 yıl sonra
    operationDate.addMonth(6);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.PhysicianAndCEA
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Tomography,
      Notes: "Doktor gerekli görürse"
    });

    //op'tan 4 buçuk yıl sonra
    operationDate.addMonth(6);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.PhysicianAndCEA
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Tomography,
      Notes: "Doktor gerekli görürse"
    });


    //op'tan 5 yıl sonra
    operationDate.addMonth(6);
    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.PhysicianAndCEA
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Colonoscopy,
      Notes: "Sonucunuzda polip çıkarsa doktorunuzla görüşün"
    });

    calendar.AddDate({
      Date: operationDate,
      ActivityType: ActivityType.Tomography,
      Notes: "Doktor gerekli görürse"
    });

    return calendar;
  }
}


