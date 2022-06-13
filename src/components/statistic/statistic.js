import { Head,
        StatisticSection,
        StatisticList,
        StatisticListItem,
        Text,
        SecondaryText,

} from './statisticStyles.js'

const statistic=require('components/statistic/statistic.json')




export const Statistic = ({stat}) => (
    <>
    <StatisticSection as="section">
    <Head as="h2">Upload Stats</Head>
    <StatisticList as="ul">
        {statistic.map(stat => (
            <StatisticListItem as="li"  key={stat.id}><Text>{stat.label}</Text> <SecondaryText>{stat.percentage}%</SecondaryText></StatisticListItem>
        ))}
    </StatisticList>
    </StatisticSection>
    </>
)




export default Statistic;
