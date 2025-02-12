type EventType = 'click' | 'scroll' | 'mousemove';
type EventExcludeType = Exclude<EventType , 'scroll'>;

const handleEvent = (event : EventExcludeType)=>{
    console.log(`handling event: ${event}`);
}

handleEvent('click')