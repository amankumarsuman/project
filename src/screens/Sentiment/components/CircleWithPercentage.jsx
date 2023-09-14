import React from 'react';

class CustomCircularProgressbar extends React.Component {
  calculatePathRadius() {
    const radius = 40; // Set the radius of the circle
    const strokeWidth = 8; // Set the stroke width
    return radius - strokeWidth / 2;
  }

  calculatePathLength() {
    const radius = this.calculatePathRadius();
    return 2 * Math.PI * radius;
  }

  calculatePathOffset() {
    const radius = this.calculatePathRadius();
    const percentage = this.props.percentage;
    return ((100 - percentage) / 100) * this.calculatePathLength();
  }

  render() {
    const { percentage, customProp, backgroundColor } = this.props; // Add backgroundColor prop
    const color=percentage>50?"green":percentage<0?"red":"Yellow"

    const pathRadius = this.calculatePathRadius();
    const pathLength = this.calculatePathLength();
    const pathOffset = this.calculatePathOffset();


    return (
      <div >
        <svg width="100" height="100" >
          <circle
            cx="50"
            cy="50"
            r={pathRadius}
            fill="none"
            stroke="#E6C0C9"
            strokeWidth="15"
            
          />
          <circle
            cx="50"
            cy="50"
            r={pathRadius}
            fill="#B9021B"
            stroke={color || "#27ae60"} // Use the provided color prop or default to a color
            strokeWidth="13"
            strokeDasharray={pathLength}
            strokeDashoffset={pathOffset}
            transform="rotate(-90 50 50)"
          />
          <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill="#fff">
            {`${percentage}`}
            {/* {`${"SENTIMENT"}`} */}
           
          </text>
         
        </svg>
      </div>
    );
  }
}

export default CustomCircularProgressbar;
