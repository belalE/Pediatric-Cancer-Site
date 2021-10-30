$(document).ready(function() {  
   var chart = {
      backgroundColor: '#f8f9fa',
       plotBackgroundColor: '#f8f9fa',
       plotBorderWidth: null,
       plotShadow: false,
   };
   var title = {
      text: 'Most Common Types of Pediatric Cancer'   
   };
   var credits = {
      enabled: false
    };      
   var tooltip = {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
   };
   var plotOptions = {
      pie: {
         allowPointSelect: true,
         cursor: 'pointer',
         dataLabels: {
            enabled: false,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
               color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
         },
         showInLegend: true
      }
   };
   var series= [{
      type: 'pie',
      name: 'Most Common Types',
      data: [
         {
           name:'Leukemia',
          y:  28.0,
          sliced: true,
          selected: true
          },
         ['Brain / CNS',       26.0],
         ['Lymphomas',8.0],
         ['Neuroblastoma',    6.0],
         ['Wilms Tumor', 5.0],
         ['Rhabdomyosarcoma', 3.0],
         ['Bone Cancer',     3.0],
         ['Retinoblastoma', 2.0],
         ['Others',   19.0]
      ],
      point:{
                  events:{
                      click: function (event) {
                          updatePage(this.x);
                      }
                  }
              },

            
   }]; 
   var responsive = {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                subtitle: {
                    text: null
                },
                credits: {
                    enabled: false
                }
            }
        }]
    }    
      
   var json = {};   
   json.chart = chart; 
   json.title = title;     
   json.tooltip = tooltip;  
   json.series = series;
   json.plotOptions = plotOptions;
   json.responsive = responsive;
   json.credits = credits;
   $('#typesPieChart').highcharts(json);  
  });

const title = document.querySelector('#title');
const percentage = document.querySelector('#percentage');
const diseaseLocation = document.querySelector('#location');
const ageGroup = document.querySelector('#ageGroup');
const infoDiv = document.querySelector('#cancerInfo');

const leukemia = {title: 'Leukemia', percentage: 28, diseaseLocation: 'blood and bone marrow', ageGroup: 'children of all ages', info: '<p>The most common types are acute lymphocytic leukemia (ALL), which is the most common childhood cancer, and acute myeloid leukemia (AML) The symptoms of these leukemias include:</p><ul><li>Bone and joint pain</li><li>Fatigue</li><li>Weakness</li><li>Pale skin</li><li>bleeding/bruising</li><li>Fever </li><li>Weight loss</li></ul><p>Acute leukemias, such as ALL and AML, need to be treated quickly, often with chemotherapy.</p>'};
const cns = {title: 'Brain and CNS Tumors', percentage: 26, diseaseLocation: 'brain and spine (central nervous system)', ageGroup: 'children of all ages', info: '<p>Spinal cord tumors are very rare, and most CNS tumors are in the brain, especially the lower parts like the cerebellum and brainstem. The symptoms of these tumors include:</p><ul><li>Headaches</li><li>Nausea</li><li>Vomiting</li><li>Blurred/double vision</li><li>Dizziness</li><li>Seizures</li><li>Trouble walking</li></ul>'};
const lymphomas = {title: 'Lymphomas', percentage: 8, diseaseLocation: 'lymph nodes and other lymph tissues (tonsils/thymus)', ageGroup: 'young children older than 3yo', info: '<p>The symptoms include:</p><ul><li>Weight loss</li><li>Fever</li><li>Sweats</li><li>Fatigue</li><li>Swollen lymph nodes</li></ul><p>There are 2 main types, which both affect children and adults. </p><ol><li><b>Hodgkin Lymphoma</b>, which accounts for about 3% of childhood cancers, is more common in adulthood and is rare in children younger than 5 years old. The disease and treatment are very similar in adults and children.</li><li><b> Non-Hodgkin Lymphoma</b>, which accounts for 5% of childhood cancers, is more common in children than Hodgkin lymphoma, but is still rare in especially young children (less than 3 years old). This cancer is more varied between adults and children and grows quicker in children.</li></ol>'};
const neuroblastoma = {title: 'Neuroblastoma', percentage: 6, diseaseLocation: 'nerve cells from fetus and embryo', ageGroup: 'infants and young children less than 10 years old', info: '<p>The symptoms include:</p><ul><li>Swelling of the abdomen</li><li>Bone pain</li><li>Fever</li></ul>'};
const wilms = {title: 'Wilms Tumor', percentage: 5, diseaseLocation: '1 or both kidneys', ageGroup: '3 or 4 year olds', info: '<p>Wilms tumor, also known as nephroblastoma, is uncommon in older children and adults. The symptoms include:</p><ul><li>Swelling or lump in the abdomen</li><li>Fever</li><li>Pain</li><li>Nausea</li><li>Poor appetite</li></ul>'};
const rhabdomyosarcoma = {title: 'Rhabdomyosarcoma', percentage: 3, diseaseLocation: 'cells that develop into skeletal muscles', ageGroup: 'young children less than 10 years old', info: '<p>Rhabdomyosarcoma can start anywhere in the body because skeletal muscles are all over our bodies. Some areas it can start are: </p><ul><li>Head/neck</li><li>Groin</li><li>Abdomen</li><li>Pelvis</li><li>Arms</li><li>Legs</li></ul><p>It is the most common type of soft tissue sarcoma—any tumor that starts in soft tissue like muscle, fat, fibrous tissue, or other supporting tissue—in children. The symptoms include:</p><ul><li>Local pain</li><li>Swelling (a lump)</li></ul>'};
const bonecancer = {title: 'Bone Cancer', percentage: 3, diseaseLocation: 'bones', ageGroup: 'older children and teenagers', info: '<p>There are 2 main types of bone cancer in children: </p><ul><li><b>Osteosarcoma</b> is the more common of the 2 types and occurs most in teens. It usually starts in fast-growing bones like the ends of leg and arm bones. The symptoms are bone pain, which worsens at night, and swelling around the bone.</li><li><b>Ewing sarcoma</b> is the less common of the type and occurs in young teens. It often starts in bones in the pelvis, chest wall, or middle of the leg. The symptoms are also bone pain and swelling.</li></ul>'};
const retinoblastoma = {title: 'Retinoblastoma', percentage: 2, diseaseLocation: 'the retina in the eyes', ageGroup: 'young children around 2 years old', info: '<p>Retinoblastomas are often found because of discoloration in the pupil. The pupil (the dark spot in the center of the eye) usually looks red under a light. However, in a patient with retinoblastoma, the eye looks white or pink.</p>'};
const other = {title: 'Other', percentage: 19, diseaseLocation: '', ageGroup: '', info: ''};

const diseaseDict = {0: leukemia, 1 : cns, 2: lymphomas,3: neuroblastoma, 4: wilms, 5 : rhabdomyosarcoma, 6: bonecancer, 7 : retinoblastoma, 8: other};

function updatePage(id) {
    const disease = diseaseDict[id];
    title.textContent = disease.title;
    percentage.textContent = `${disease.percentage}% of all childhood cancer`;
    diseaseLocation.textContent = `Occurs in ${disease.diseaseLocation}`;
    ageGroup.textContent = `Most common in ${disease.ageGroup}`
    infoDiv.innerHTML = disease.info;
    if (id == 8) {
        diseaseLocation.classList.add('hidden');
        ageGroup.classList.add('hidden');
        infoDiv.classList.add('hidden');
    } else {
        diseaseLocation.classList.remove('hidden');
        ageGroup.classList.remove('hidden');
        infoDiv.classList.remove('hidden');
    }
}


// 3d slideshows
const leftButton = document.querySelector(".arrow.left");
const rightButton = document.querySelector(".arrow.right");

leftButton.addEventListener("click", () => {
	turnSlider("left");
});

rightButton.addEventListener("click", () => {
	turnSlider("right");
});

function turnSlider(direction) {
	const slides = document.querySelectorAll(`.slide2`);
	slides.forEach((slide) => {
		let currentSlide = +(slide.classList + "").split("-")[1];
		let slideToBe;
		switch (direction) {
			case "left": {
				slideToBe = currentSlide - 1;
				if (slideToBe < 1) {
					slideToBe = slides.length;
					slide.style.left = "-500px";
				}
				break;
			}
			case "right": {
				slideToBe = currentSlide + 1;
				if (slideToBe > slides.length) {
					slideToBe = 1;
					slide.style.left = "2000px";
				}
				break;
			}
		}
		slide.classList.remove(`slide-${currentSlide}`);
		slide.classList.add(`slide-${slideToBe}`);
	});
}
