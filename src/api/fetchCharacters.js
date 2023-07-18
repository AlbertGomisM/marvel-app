

const fetchCharacters = async (page) =>{

  
    try {
      const request = await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=`+page+`&apikey=c3539cb9d6399d31be99ff2f6b0f6aa1`);
      const response = await request.json();
      return response ;
    } catch (error) {
      console.error(error);
      return {msg: error.message};
    }
  };
  
  export default fetchCharacters;