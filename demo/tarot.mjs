// Rider-Waite-Smith: 22 major and 56 minor cards. Reflection, not prediction.
const majors=[
['The Fool','00_Fool.jpg','Beginnings and curiosity','Take a small first step, while preparing for what you do not yet know.','Notice impulsiveness or fear that keeps you from beginning.'],
['The Magician','01_Magician.jpg','Resources and action','Use the tools and skills already available to turn one intention into action.','Notice scattered effort or a gap between your words and actions.'],
['The High Priestess','02_High_Priestess.jpg','Observation and intuition','Listen closely and allow incomplete information to become clearer.','Check whether assumptions or ignored feelings need attention.'],
['The Empress','03_Empress.jpg','Care and creativity','Nurture an idea, relationship or resource that is still growing.','Notice overgiving, exhaustion or creative needs left unattended.'],
['The Emperor','04_Emperor.jpg','Structure and boundaries','Build a reliable plan with clear responsibilities and boundaries.','Look for rigid control or a missing structure that would support you.'],
['The Hierophant','05_Hierophant.jpg','Learning and tradition','Learn from trustworthy experience and understand why a method works.','Question conventions that no longer fit your circumstances.'],
['The Lovers','06_Lovers.jpg','Values and choice','Clarify what matters to you and communicate honestly before choosing.','Notice conflicting values or choices made mainly to please others.'],
['The Chariot','07_Chariot.jpg','Direction and momentum','Choose a direction and coordinate your effort around it.','Check whether speed is replacing purpose or different goals are competing.'],
['Strength','08_Strength.jpg','Patience and courage','Meet difficulty with steady, gentle persistence.','Notice depleted energy, suppressed emotion or harsh self-judgment.'],
['The Hermit','09_Hermit.jpg','Reflection and inquiry','Make quiet space to understand the next useful step.','Check whether reflection has become isolation or endless analysis.'],
['Wheel of Fortune','10_Wheel_of_Fortune.jpg','Cycles and change','Observe what is changing and keep room to adapt.','Notice resistance to change or the temptation to leave every choice to luck.'],
['Justice','11_Justice.jpg','Fairness and accountability','Check the evidence, weigh the consequences and own your choices.','Look for missing facts, unresolved unfairness or excessive self-criticism.'],
['The Hanged Man','12_Hanged_Man.jpg','Pause and perspective','Allow a pause and examine the situation from another viewpoint.','Notice indefinite delay or sacrifice that no longer serves a purpose.'],
['Death','13_Death.jpg','Endings and transition','Recognize what has ended and make space for a new phase.','Notice resistance to letting go or pressure to change before you are ready.'],
['Temperance','14_Temperance.jpg','Balance and integration','Combine different needs at a pace you can sustain.','Notice imbalance, impatience or a need that has been overlooked.'],
['The Devil','15_Devil.jpg','Attachments and awareness','Name a pattern that feels restrictive and identify one choice still available.','Avoid shame or all-or-nothing judgments; start with one practical boundary.'],
['The Tower','16_Tower.jpg','Disruption and rebuilding','Stabilize yourself, then examine what actually needs to be rebuilt.','Notice fear of change or postponed repairs without assuming disaster.'],
['The Star','17_Star.jpg','Hope and recovery','Make room for recovery and a small, realistic hope.','Notice fatigue or discouragement and allow confidence to return gradually.'],
['The Moon','18_Moon.jpg','Uncertainty and feeling','Acknowledge uncertainty and check impressions against observable facts.','Notice anxiety amplifying guesses or ambiguous signals.'],
['The Sun','19_Sun.jpg','Clarity and vitality','Enjoy visible progress and share clear information.','Notice tiredness or optimism covering a problem that still needs attention.'],
['Judgement','20_Judgement.jpg','Review and response','Use what you have learned to make a deliberate new choice.','Notice repetitive self-blame or fear of being evaluated.'],
['The World','21_World.jpg','Completion and integration','Acknowledge a completed phase and carry its lessons forward.','Notice perfectionism about closure or unfinished work that needs naming.']];
const suits=[['Wands','Wands','Action, creativity and motivation'],['Cups','Cups','Feelings, relationships and care'],['Swords','Swords','Thought, communication and judgment'],['Pentacles','Pents','Time, resources and practical results']];
const ranks=[
['Ace','A new possibility','Notice a small opening and try a first step.','Check whether hesitation or a lack of preparation is limiting an opportunity.'],
['Two','Choice and balance','Compare your options and the needs behind them.','Notice indecision or an overly narrow either-or choice.'],
['Three','Growth and collaboration','Bring an idea into contact with people and practical conditions.','Check communication, coordination and differing expectations.'],
['Four','Stability and pause','Create a foundation that supports your next effort.','Notice stagnation, overprotection or a need for rest.'],
['Five','Challenge and adjustment','Face a disagreement or setback and identify what can change.','Notice frustration hiding the support still available.'],
['Six','Response and transition','Recognize change and give or accept appropriate support.','Check whether old experiences are shaping a current choice.'],
['Seven','Assessment and attention','Review progress and choose where to keep investing.','Notice distraction, premature withdrawal or overlooked conditions.'],
['Eight','Practice and movement','Build progress through consistent, manageable steps.','Check for rushed effort or repetition that is no longer useful.'],
['Nine','Experience and self-care','Recognize your progress and protect the energy to continue.','Notice prolonged strain or carrying everything alone.'],
['Ten','Results and closure','Review accumulated results or burdens and prepare to close a phase.','Notice excess responsibility or treating a temporary result as final.'],
['Page','Learning and exploration','Stay curious, collect information and try a new expression.','Check incomplete messages or an idea that still needs practice.'],
['Knight','Commitment and action','Turn intention into action while checking your direction.','Notice haste, unstable motivation or effort without a clear aim.'],
['Queen','Inner maturity','Use attentive understanding and sound judgment.','Notice overgiving or boundaries that need renewal.'],
['King','Responsibility and mastery','Coordinate people and resources with mature judgment.','Notice rigid control or responsibility that should be shared.']];
export const deck=majors.map(([name,image,theme,upright,reversed])=>({name,english:name,image,theme,upright,reversed,symbol:theme,arcana:'Major Arcana'}));
for(const [suit,file,symbol] of suits)for(let i=0;i<ranks.length;i++){
 const [rank,theme,up,rev]=ranks[i],name=rank+' of '+suit;
 deck.push({name,english:name,theme,symbol,upright:up+' Consider this in the context of '+symbol.toLowerCase()+'.',reversed:rev+' Reflect on '+symbol.toLowerCase()+'.',image:file+String(i+1).padStart(2,'0')+'.jpg',arcana:'Minor Arcana'});
}
