import axios from "axios";

//Aqui é o endereço do localhost dentro do contêiner. 
//Nesse caso é app porque o serviço que expôe o app (não é container_name: appstore)
const http = axios.create({
  baseURL: "http://app:3000/api"
})

export default http;