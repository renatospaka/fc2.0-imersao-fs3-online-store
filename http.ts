import axios from "axios";

// Aqui é o endereço do localhost dentro do contêiner. 
// Nesse caso é app porque o serviço que expôe o app (não é container_name: appstore)
//"http://app:3000/api" 

  const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STORE_API_URL   
})

export default http;