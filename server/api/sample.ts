
export default defineEventHandler(async (event) => {

    ////use 
    // async fetchData() {
    //     const { data } = await useFetch('/api/openai?name=anthony', {
    //       method: 'post',
    //       body: { age:30 },
    //     });
    //     console.log(data);
    //     this.data = data;
    //   }
    ////handle query params
    // const { name } = getQuery(event);
    ////handle post data
    // const { age } = await readBody(event);
    // return {
    //     message: `Hello, ${name}! you are ${age} years old!`,
    // }
    ////api call with private key
    const data = await $fetch('https://jsonplaceholder.typicode.com/todos/1');
    return data;
}) 