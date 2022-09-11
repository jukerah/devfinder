import { svg } from '../../data/svgList';
import { NotFound } from '../NotFound';

export const ProfileCard = (props) => {
  if (props.notFound) return <NotFound />
  else {
    const createdDate = () => {
      if (props.user['created_at'] !== '') {
        const createdDate = new Date(props.user['created_at']);
        const day = createdDate.getUTCDate();
        const year = createdDate.getUTCFullYear();
        const month = () => {
          switch(createdDate.getUTCMonth() + 1) {
            case 1: return 'Jan';
            case 2: return 'Jeb';
            case 3: return 'Mar';
            case 4: return 'Apr';
            case 5: return 'May';
            case 6: return 'June';
            case 7: return 'July';
            case 8: return 'Sept';
            case 9: return 'Otc';
            case 10: return 'Jan';
            case 11: return 'Nov';
            case 12: return 'Dec';
            default: return '';
          }
        };
        return `Joined ${day} ${month()} ${year}`;
      } else return '';
    }
    console.log(props.user);

    const user = {
      avatar: props.user['avatar_url'] !== null ? props.user['avatar_url'] : '',
      name: props.user['name'],
      url: props.user['url'],
      login: props.user['login'],
      createdDate: createdDate(),
      bio: props.user['bio'],
      repos: props.user['public_repos'],
      followers: props.user['followers'],
      following: props.user['following'],
      location: props.user['location'],
      webSite: props.user['blog'],
      twitter: props.user['twitter_username'],
      company: props.user['company']
    }

    const validated = (item) => {
      switch (item) {
        case 'name': return (user.name !== null && user.name !== '') ? true : false;
        case 'location': return (user.location !== null && user.location !== '') ? true : false;
        case 'webSite': return (user.webSite !== null && user.webSite !== '') ? true : false;
        case 'twitter': return (user.twitter !== null && user.twitter !== '') ? true : false;
        case 'company': return (user.company !== null && user.company !== '') ? true : false;
        default: return false;
      }
    }

    return (
      <div className='flex justify-center flex-col bg-white dark:bg-cloudBurst p-6 rounded-2xl drop-shadow-md'>
        <div className='flex items-center'>
          <img className='rounded-full mr-4 sm:mr-6 md:mr-11 w-[80px] sm:w-[120px] md:w-[144px] h-[80px] sm:h-[120px] md:h-[144px]' src={user.avatar} alt='Avatar' width='80' height='80'/>
          
          <div className='flex flex-col justify-center'>
            <p className='text-cloudBurst dark:text-white font-bold text-lg sm:text-2xl md:text-3xl'>
              {validated('name') ? user.name : user.login}
            </p>

            <p className='mt-1 sm:mt-3'>
              <a
                className='text-azureRadiance dark:text-malibu text-base md:text-xl'
                href={user.url} target='_blank' rel='noopener noreferrer'
              >
                @{user.login}
              </a>
            </p>

            <p className='text-kashmirBlue dark:text-white text-base mt-2 sm:mt-4 md:text-xl'>
              {user.createdDate}
            </p>
          </div>
        </div>

        <p className='text-kashmirBlue dark:text-white texct-base md:text-xl mt-8'>{(user.bio === null ? 'This profile has no bio.' : user.bio)}</p>

        <ul className='text-kashmirBlue dark:text-white flex justify-center sm:justify-between flex-wrap gap-3 mt-5 p-5 sm:pl-8 sm:pr-8 bg-zircon dark:bg-bigStone rounded-lg text-center'>
          <li>
            <p className='text-sm sm:text-base md:text-xl'>Repos</p>
            <p className='text-lg sm:text-xl md:text-2xl font-bold mt-2'>{user.repos}</p>
          </li>
          <li>
            <p className='text-sm sm:text-base md:text-xl'>Followers</p>
            <p className='text-lg sm:text-xl md:text-2xl font-bold mt-2'>{user.followers}</p>
          </li>
          <li>
            <p className='text-sm sm:text-base md:text-xl'>Following</p>
            <p className='text-lg sm:text-xl md:text-2xl font-bold mt-2'>{user.following}</p>
          </li>
        </ul>

        <ul className='text-kashmirBlue dark:text-white grid grid-cols-1 md:grid-cols-2 md:justify-between gap-4 w-full mt-8 text-base md:text-xl'>
          <li className='flex gap-4'>
            {validated('location') ? svg.icon.mapPin.ok : svg.icon.mapPin.notOk}
            <p className={!validated('location') && 'text-gray dark:text-slate'}>
              {validated('location') ? user.location : 'Not Available'}
            </p>
          </li>

          <li className='flex gap-4'>
            {validated('webSite') ? svg.icon.link.ok : svg.icon.link.notOk}
            <p className={!validated('webSite') && 'text-gray dark:text-slate'}>
              {validated('webSite') ? user.webSite : 'Not Available'}
            </p>
          </li>

          <li className='flex gap-4'>
            {validated('twitter') ? svg.icon.twitter.ok : svg.icon.twitter.notOk}
            <p className={!validated('twitter') && 'text-gray dark:text-slate'}>
              {validated('twitter') ? user.twitter : 'Not Available'}
            </p>
          </li>

          <li className='flex gap-4'>
            {validated('company') ? svg.icon.company.ok : svg.icon.company.notOk}
            <p className={!validated('company') && 'text-gray dark:text-slate'}>
              {validated('company') ? user.company : 'Not Available'}
            </p>
          </li>
          </ul>
      </div>
    );
  }
}
