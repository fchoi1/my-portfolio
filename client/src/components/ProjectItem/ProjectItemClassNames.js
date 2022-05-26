import classNames from 'classnames';

export default function returnClass(reversed) {
  const Role = classNames({
    'p-item-role': true,
    'p-item-role-right': reversed
  });

  const RoadBlock = classNames({
    'p-item-rb': true,
    'p-item-rb-right': reversed
  });

  const Solution = classNames({
    'p-item-solution': true,
    'p-item-solution-right': reversed
  });

  const Tech = classNames({
    'p-item-tech': true,
    'p-item-tech-left': reversed
  });

  const Features = classNames({
    'p-item-feature': true,
    'p-item-feature-right': reversed
  });

  const Description = classNames({
    'p-item-description': true,
    'p-item-description-right': reversed
  });

  const Link = classNames({
    'p-item-link': true,
    'p-item-link-right': reversed
  });
  const Image = classNames({
    'p-item-images': true,
    'p-item-images-left': reversed
  });
  return {
    Role,
    Image,
    Link,
    Description,
    Features,
    Tech,
    Solution,
    RoadBlock
  };
}
