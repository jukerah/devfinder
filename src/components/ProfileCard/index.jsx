import { useEffect } from 'react';
import { NotFound } from '../NotFound';

export const ProfileCard = (props) => {
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

  useEffect(() => {
    console.log(props.user);
  }, [props.user]);

  if (props.notFound) return <NotFound />
  else {
    return (
      <div className='flex items-center bg-white dark:bg-cloudBurst p-6 rounded-2xl drop-shadow-md'>
        <div className='flex items-center'>
          <img className='rounded-full mr-4 sm:mr-6 md:mr-11 w-[80px] sm:w-[120px] md:w-[144px] h-[80px] sm:h-[120px] md:h-[144px]' src={props.user['avatar_url']} alt='Avatar' width='80' height='80'/>
          <div className='flex flex-col justify-center'>
            <p className='text-cloudBurst dark:text-white font-bold text-lg sm:text-2xl md:text-3xl'>
              {props.user['name']}
            </p>

            <p className='mt-1 sm:mt-3'>
              <a
                className='text-azureRadiance dark:text-malibu text-base md:text-xl'
                href={props.user['url']} target='_blank' rel='noopener noreferrer'
              >
                @{props.user['login']}
              </a>
            </p>

            <p className='text-kashmirBlue dark:text-white text-base mt-2 sm:mt-4 md:text-xl'>
              {createdDate()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
