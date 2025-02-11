import { useQuery } from '@apollo/client';

import '../../assets/less/GuildCarousel.less'

import { Carousel } from 'primereact/carousel';
import { ProgressSpinner } from 'primereact/progressspinner';

import { FETCH_GUILDS } from '../../gql/queries/guilds';

import GuildInfo from './GuildInfo';

const GuildCarousel = () => {
    const { loading, data: { guilds } = {} } = useQuery(FETCH_GUILDS);

    const guildTemplate = (guild: any) => <GuildInfo guild={guild} />;

    const breakpoints = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    return loading ? <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" /> : (
        <Carousel
            value={guilds}
            itemTemplate={guildTemplate}
            numVisible={3}
            responsiveOptions={breakpoints}
        />
    )
};

export default GuildCarousel;