
var company_history_content_small_text = "История компании неразрывно связана с развитием азотной промышленности и берет свое начало с 1960 года.",
company_history_content_big_text = "История компании неразрывно связана с развитием азотной промышленности и берет свое начало с 1960 года, когда с целью оказания предприятиям технической помощи при вводе в эксплуатацию химических производств было создано Северодонецкое отраслевое производственное управление Государственного Союзного инженерно-технологического треста «ОРГХИМ».",
company_management_content_small_text = "Краткая информация",
company_management_content_big_text = "Немного менее краткаяя информация",
company_presentation_content_small_text = "Услуги компании, Референц-лист, Презентация, Презентация Проектного института, Обучение эксплуатационного персонала",
company_presentation_content_big_text = "Услуги компании, Референц-лист, Презентация, Презентация Проектного института, Обучение эксплуатационного персонала",
company_license_content_small_text = "Украина, РФ, Казахстан, Узбекистан, Беларусь",
company_license_content_big_text = "Украина, РФ, Казахстан, Узбекистан, Беларусь",
company_financial_statements_content_small_text = "Річна фінансова звітність, Аудиторський висновок",
company_financial_statements_content_big_text = "Річна фінансова звітність, Аудиторський висновок";

var company_history_content = document.getElementById("company_history_content"),
company_management_content = document.getElementById("company_management_content"),
company_presentation_content = document.getElementById("company_presentation_content"),
company_license_content = document.getElementById("company_license_content"),
company_financial_statements_content = document.getElementById("company_financial_statements_content");


function inner_content_def_size (container){
  container.style.width = "37vw";
  container.style.height = "7.1vw";
}
function inner_content_big_size (container){
  container.style.width = "60vw";
  container.style.height = "9.6vw";
}
function content_item_img_def_size(container){
  container.style.width = "6vw";
  container.style.height = "7vw";
}
function content_item_img_big_size(container){
  container.style.width = "8vw";
  container.style.height = "9.5vw";
}

function mouseover_content(container, text){
  content_item_img_big_size(container.getElementsByTagName("img")[0]);
  inner_content_big_size(container.getElementsByClassName("inner_content")[0]);
  container.getElementsByClassName("inner_content")[0].getElementsByTagName("p")[0].innerHTML = text;
}
function mouseout_content(container, text){
  content_item_img_def_size(container.getElementsByTagName("img")[0]);
  inner_content_def_size(container.getElementsByClassName("inner_content")[0]);
  container.getElementsByClassName("inner_content")[0].getElementsByTagName("p")[0].innerHTML = text;
}

company_history_content.addEventListener("mouseover", function(event) {
  mouseover_content(company_history_content, company_history_content_big_text);
})
company_history_content.addEventListener("mouseout", function(event) {
  mouseout_content(company_history_content, company_history_content_small_text);
})
company_management_content.addEventListener("mouseover", function(event) {
  mouseover_content(company_management_content, company_management_content_big_text);
})
company_management_content.addEventListener("mouseout", function(event) {
  mouseout_content(company_management_content, company_management_content_small_text);
})
company_presentation_content.addEventListener("mouseover", function(event) {
  mouseover_content(company_presentation_content, company_presentation_content_big_text);
})
company_presentation_content.addEventListener("mouseout", function(event) {
  mouseout_content(company_presentation_content, company_presentation_content_small_text);
})
company_license_content.addEventListener("mouseover", function(event) {
  mouseover_content(company_license_content, company_license_content_big_text);
})
company_license_content.addEventListener("mouseout", function(event) {
  mouseout_content(company_license_content, company_license_content_small_text);
})
company_financial_statements_content.addEventListener("mouseover", function(event) {
  mouseover_content(company_financial_statements_content, company_financial_statements_content_big_text);
})
company_financial_statements_content.addEventListener("mouseout", function(event) {
  mouseout_content(company_financial_statements_content, company_financial_statements_content_small_text);
})
