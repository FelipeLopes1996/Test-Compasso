import Axios from 'axios'

export const Science = async () => { 
	const response = await Axios.get(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=ntHSFlwLAxULaj8UGvIWahMPrAeKnkzc`)
	const valores: any[] = Object.values(response.data.results)
	const science = valores.filter(item => { 
		if (item.section === "science") {
			return item
		} 
		})
	
	return science

}

export const Technology = async () => {
    const response =  await Axios.get('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=ntHSFlwLAxULaj8UGvIWahMPrAeKnkzc')
	const valores: any[] = Object.values(response.data.results)
	const technology = valores.filter(item => { 
		if (item.section === "technology") {
			return item
		} 
		})
	
	return technology
}