$(function() {
    $("#dateOperation").datepicker({
        dateFormat: 'dd.mm.yy',
    });

    $("#dateRadio").datepicker({
        dateFormat: 'dd.mm.yy',
    });
});

new Vue({
    el: "#app",
    data: {
        cancerTypes: [
            //"Bladder Cancer", "Breast Cancer", 
            "Colorectal Cancer",
            //"Endometrial Cancer", "Esophageal Cancer", 
            //  "Gastric Cancer",
            // "Gastrointestinal Stromal Tumor", "Glioblastoma", 
            // "Head and Neck Cancer", "Kidney Cancer", 
            // "Liver Cancer", "Melanoma", "Mesothelioma",
             "Non-Small Cell Lung Cancer", 
             //"Osteosarcoma", 
            // "Ovarian Cancer", "Pancreatic Cancer",
            // "Prostate Cancer", "Skin Basal Cell Carcinoma", 
             "Small Cell Lung Cancer",
            // "Soft Tissue Sarcoma", "Testicular Cancer", 
            // "Thyroid Cancer", "Unknown"
        ],

        stages: ["1", "2", "3", "4"],

        model: {

            Type: null,
            Stage: null,
            OperationDate: undefined
        }


    },

    methods: {
        calculate: function() {

            $("#calendarx").html("");
            this.model.OperationDate = $("#dateOperation").val();
            this.model.RadioDate = $("#dateRadio").val();
            var calendar = calculatex(this.model);
            for (const key in calendar.Dates) {
                if (Object.hasOwnProperty.call(calendar.Dates, key)) {
                    const element = calendar.Dates[key];
                    var actType =element.ActivityType;

                    $("#calendarx").append("<li>"+ actType +" at "  +element.Date.toLocaleDateString()+
                    element.Notes
                    
                    
                    +"</li>")
                }
            }
        },
    }
})