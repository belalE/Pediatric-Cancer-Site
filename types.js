const typesBar = document.querySelector('#typesBar');
const barItems = document.querySelectorAll('.barItem');

const title = document.querySelector('#title');
const percentage = document.querySelector('#percentage');
const diseaseLocation = document.querySelector('#location');
const ageGroup = document.querySelector('#ageGroup');
const infoDiv = document.querySelector('#cancerInfo');

const leukemia = {title: 'Leukemia', percentage: 28, diseaseLocation: 'blood and bone marrow', ageGroup: 'children of all ages', info: '<p>The most common types are acute lymphocytic leukemia (ALL), which is the most common childhood cancer, and acute myeloid leukemia (AML) The symptoms of these leukemias include:</p><ul><li>Bone and joint pain</li><li>Fatigue</li><li>Weakness</li><li>Pale skin</li><li>bleeding/bruising</li><li>Fever </li><li>Weight loss</li></ul><p>Acute leukemias, such as ALL and AML, need to be treated quickly, often with chemotherapy.</p>'};
const cns = {title: 'Brain and CNS Tumors', percentage: 26, diseaseLocation: 'brain and spine (central nervous system)', ageGroup: 'children of all ages', info: '<p>Spinal cord tumors are very rare, and most CNS tumors are in the brain, especially the lower parts like the cerebellum and brainstem. The symptoms of these tumors include:</p><ul><li>Headaches</li><li>Nausea</li><li>Vomiting</li><li>Blurred/double vision</li><li>Dizziness</li><li>Seizures</li><li>Trouble walking</li></ul>'};
const lymphomas = {title: 'Lymphomas', percentage: 8, diseaseLocation: 'lymph nodes and other lymph tissues (tonsils/thymus)', ageGroup: 'young children older than 3 years old and adults or children above the age of 5 for Non-Hodgkin and Hodgkin lymphomas, respectively', info: '<p>The symptoms include:</p><ul><li>Weight loss</li><li>Fever</li><li>Sweats</li><li>Fatigue</li><li>Swollen lymph nodes</li></ul><p>There are 2 main types, which both affect children and adults. </p><ol><li><b>Hodgkin Lymphoma</b>, which accounts for about 3% of childhood cancers, is more common in adulthood and is rare in children younger than 5 years old. The disease and treatment are very similar in adults and children.</li><li><b> Non-Hodgkin Lymphoma</b>, which accounts for 5% of childhood cancers, is more common in children than Hodgkin lymphoma, but is still rare in especially young children (less than 3 years old). This cancer is more varied between adults and children and grows quicker in children.</li></ol>'};
const neuroblastoma = {title: 'Neuroblastoma', percentage: 6, diseaseLocation: 'nerve cells from fetus and embryo', ageGroup: 'infants and young children less than 10 years old', info: '<p>The symptoms include:</p><ul><li>Swelling of the abdomen</li><li>Bone pain</li><li>Fever</li></ul>'};
const wilms = {title: 'Wilms Tumor', percentage: 5, diseaseLocation: '1 or both kidneys', ageGroup: '3 or 4 year olds', info: '<p>Wilms tumor, also known as nephroblastoma, is uncommon in older children and adults. The symptoms include:</p><ul><li>Swelling or lump in the abdomen</li><li>Fever</li><li>Pain</li><li>Nausea</li><li>Poor appetite</li></ul>'};
const rhabdomyosarcoma = {title: 'Rhabdomyosarcoma', percentage: 3, diseaseLocation: 'cells that develop into skeletal muscles', ageGroup: 'young children less than 10 years old', info: '<p>Rhabdomyosarcoma can start anywhere in the body because skeletal muscles are all over our bodies. Some areas it can start are: </p><ul><li>Head/neck</li><li>Groin</li><li>Abdomen</li><li>Pelvis</li><li>Arms</li><li>Legs</li></ul><p>It is the most common type of soft tissue sarcoma—any tumor that starts in soft tissue like muscle, fat, fibrous tissue, or other supporting tissue—in children. The symptoms include:</p><ul><li>Local pain</li><li>Swelling (a lump)</li></ul>'};
const bonecancer = {title: 'Bone Cancer', percentage: 3, diseaseLocation: 'bones', ageGroup: 'older children and teenagers', info: '<p>There are 2 main types of bone cancer in children: </p><ul><li><b>Osteosarcoma</b> is the more common of the 2 types and occurs most in teens. It usually starts in fast-growing bones like the ends of leg and arm bones. The symptoms are bone pain, which worsens at night, and swelling around the bone.</li><li><b>Ewing sarcoma</b> is the less common of the type and occurs in young teens. It often starts in bones in the pelvis, chest wall, or middle of the leg. The symptoms are also bone pain and swelling.</li></ul>'};
const retinoblastoma = {title: 'Retinoblastoma', percentage: 2, diseaseLocation: 'the retina in the eyes', ageGroup: 'young children around 2 years old', info: '<p>Retinoblastomas are often found because of discoloration in the pupil. The pupil (the dark spot in the center of the eye) usually looks red under a light. However, in a patient with retinoblastoma, the eye looks white or pink.</p>'};
const other = {title: 'Other', percentage: 19, diseaseLocation: '', ageGroup: '', info: ''};

const diseaseDict = {'leukemia': leukemia, 'cns' : cns, 'lymphomas': lymphomas,'neuroblastoma': neuroblastoma, 'wilms': wilms, 'rhabdomyosarcoma' : rhabdomyosarcoma, 'bonecancer' : bonecancer, 'retinoblastoma' : retinoblastoma, 'other' : other};


for (barItem of barItems) {
    const id = barItem.id;
    barItem.addEventListener('mouseover', () => {
        updatePage(id)
    })
}

function updatePage(id) {
    const disease = diseaseDict[id];
    for (item of barItems) {
        item.classList.remove('selected');
    }
    title.textContent = disease.title;
    percentage.textContent = `${disease.percentage}% of all childhood cancer`;
    if (id == 'other') {
        diseaseLocation.classList.add('hidden');
        ageGroup.classList.add('hidden');
        infoDiv.classList.add('hidden');
    } else {
        diseaseLocation.classList.remove('hidden');
        ageGroup.classList.remove('hidden');
        infoDiv.classList.remove('hidden');
    }
    diseaseLocation.textContent = `Occurs in ${disease.diseaseLocation}`;
    ageGroup.textContent = `Most common in ${disease.ageGroup}`
    const div = document.querySelector(`#${id}`);
    div.classList.add('selected');
    infoDiv.innerHTML = disease.info;
}