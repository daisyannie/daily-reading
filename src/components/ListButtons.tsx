import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import challenges from '../../schedule.json'
import { eachDayOfInterval, format } from 'date-fns'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export function ListButtons() {
  const classes = useStyles();

  const dateList = eachDayOfInterval({
    start: new Date('2020-01-01'),
    end: new Date('2021-12-31')
  })
  const filteredDateList = dateList.filter((date: Date) => {
    console.log(date.getTime(),new Date('2020-02-29').getTime())
    return date.getTime() != (new Date('2020-02-29')).getTime()
  })
  
  console.log(dateList.length, filteredDateList.length)

  return (
    <div className={classes.root}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
      {challenges.schedule.map((item, index) => {
        return <Button 
          target="_blank" 
          href={`https://wol.jw.org/pt/wol/l/r5/lp-t?q=${item}`} 
          key={index}>
            {`${format(dateList[index+1],'dd/MM/yyyy')} - ${item}`}
        </Button>
      })}
      </ButtonGroup>
    </div>
  )
}