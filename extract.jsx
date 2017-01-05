    function Comment(props) {
      return (
        <div className="Comment">
          <UserInfo user={props.author} />
        <div className="Comment-body">  
        </div>
      );
    }

    function Avatar(props){
      return ({
         <img className="Avatar"
              src={props.user.avatarUrl}
              alt={props.user.name}
            />
        });
    }

    function UserInfo(props) {
      return ({
       <div className="UserInfo">
          <Avatar user={props.user} />
          <div className="UserInfo-name">
            {props.user.name}
          </div>
          <userBadges user{props.user} />
        </div>
        });
    }

    function userBadges(props) {
      return ({
            <div className="UserBadges">
            <div className="badge">{props.userBadge[0]}</div>
            <div className="badge">{props.userBadge[1]}</div>
            <div className="badge">{props.userBadge[2]}</div>
          </div>
        });
    }

    function commentBody(props){
      return ({
            <h1>{props.commentHeading}</h1>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
              {formatDate(props.date)}
            </div>
          </div>
        });
    }

