import react from 'react';
import Article from '../components/Article'



const articles = [
    {
        id: 1,
        title:"Does a healthy lifestyle make a difference?",
        text: 
        "As it turns out, healthy habits make a big difference. According to this analysis, people who met criteria for all five habits enjoyed significantly, impressively longer lives than those who had none: 14 years for women and 12 years for men (if they had these habits at age 50). People who had none of these habits were far more likely to die prematurely from cancer or cardiovascular disease.Study investigators also calculated life expectancy by how many of these five healthy habits people had. Just one healthy habit (and it didn’t matter which one) … just one… extended life expectancy by two years in men and women. Not surprisingly, the more healthy habits people had, the longer their lifespan. This is one of those situations where I wish I could reprint their graphs for you, because they’re so cool. (But if you’re very curious, the article is available online, and the graphs are on page 7. Check out Graph B, “Estimated life expectancy at age 50 according to the number of low-risk factors.This is huge. And, it confirms prior similar research — a lot of prior similar research. A 2017 study using data from the Health and Retirement Study found that people 50 and older who were normal weight, had never smoked, and drank alcohol in moderation lived on average seven years longer. A 2012 mega-analysis of 15 international studies that included over 500,000 participants found that over half of premature deaths were due to unhealthy lifestyle factors such as poor diet, inactivity, obesity, excessive alcohol intake, and smoking. And the list of supporting research goes on."
    },
     {
         id: 2,
         title: "A healthy diet",
         text: "A healthy diet involves eating a variety of foods in the correct proportions and consuming a calorie intake that allows for the maintenance of healthy body weight. Although this varies for everyone, as a general guide, this should include. At least five portions of fruit and vegetables per day should account for a third of your daily food intake. Evidence has shown that people who meet this requirement are at a lower risk of developing some cancers and heart disease. One meta-analysis found a dose-response relationship between fruit and vegetable intake and disease, with the risk of death from heart disease dropping by 8% per portion of fruit or vegetables consumed daily, up to ten portions, while cancer risk dropped by 3% per portion.Starchy foods, particularly wholegrain varieties which contain more fiber and nutrients than white varieties. Whole grains have been shown to reduce the risk of several cancers, type 2 diabetes and heart disease and promote healthy gut bacteria.Lean proteins, especially fish, eggs, and white meat, are essential for cellular repair and provide a range of vitamins and minerals.Dairy foods and their alternatives, which are a good source of protein and provide calcium.Limited amounts of unsaturated fats."

     },

      {
          id: 3,
          title: "Physical activity",
          text: "The World Health Organisation recommends that all adults undertake regular physical activity, including at least thirty minutes of moderate aerobic activity daily, supplemented by at least two weight-bearing activity sessions per week. Being physically fit protects against diseases such as cardiovascular disease, some cancers, diabetes mellitus and osteoporosis and aids in the secondary prevention (i.e., the worsening of symptoms) of such disorders."
      }
]

const HomePage = () => {
    const artList = articles.map(article => 
        (

            <Article key={article.id} {...article}/>

        
    ))
            return (
                <div className="home">
                    {artList}
                </div>
            );
}

export default HomePage;
