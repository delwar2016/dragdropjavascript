$(function() {
  var init = {}
  validation = {
    'img_src': '',
    'possible_responses':[
      {'item_id': '1', 'item_type': 'label', 'text': 'Product', 'border_color': '#747678', 'background_color': '#ffffff', 'width': 250, 'height': 50, 'x': 200, 'y': 300},
      {'item_id': '2', 'item_type': 'token', 'text': 'Car', 'border_color': '#747678', 'background_color': '#ffffff', 'width': 250, 'height': 50, 'x': 200, 'y': 360},
      {'item_id': '3', 'item_type': 'token', 'text': 'Bus', 'border_color': '#747678', 'background_color': '#ffffff', 'width': 250, 'height': 50, 'x': 200, 'y': 420},
      {'item_id': '4', 'item_type': 'label', 'text': 'Categories', 'border_color': '#747678', 'background_color': '#ffffff', 'width': 250, 'height': 50, 'x': 460, 'y': 300},
      {'item_id': '5', 'item_type': 'target', 'text': 'small', 'border_color': '#747678', 'background_color': '#f03bff', 'width': 250, 'height': 50, 'x': 460, 'y': 360},
      {'item_id': '6', 'item_type': 'target', 'text': 'big transport', 'border_color': '#747678', 'background_color': '#f03bff', 'width': 250, 'height': 50, 'x': 460, 'y': 420}
    ],
    'valid_items': [
      {target_id: '5', token_id: '2'},
      {target_id: '6', token_id: '1'}
    ]
  };

  var qContainerElement = $('.dragdrop-question-container');

  _.each(validation.possible_responses, function (possibleResponse) {
    var labelStyle = '';
    labelStyle += 'width:' + possibleResponse.width + 'px';
    labelStyle += labelStyle ? ';' : '';
    labelStyle += 'height:' + possibleResponse.height + 'px';
    labelStyle += labelStyle ? ';' : '';
    labelStyle += 'border-color:' + possibleResponse.border_color;
    labelStyle += labelStyle ? ';' : '';
    labelStyle += 'background-color:' + possibleResponse.background_color;
    labelStyle += labelStyle ? ';' : '';

    var positionStyle = '';
    positionStyle += positionStyle ? ';' : '';
    positionStyle += 'top:' + possibleResponse.y + 'px';
    positionStyle += positionStyle ? ';' : '';
    positionStyle += 'left:' + possibleResponse.x + 'px';
    positionStyle += positionStyle ? ';' : '';

    var additionalClass = '';
    additionalClass += additionalClass ? ' ' : '';
    additionalClass += 'drag-drop-' + possibleResponse.item_type;
    additionalClass += additionalClass ? ' ' : '';

    var dataAttributes = '';
    dataAttributes += dataAttributes ? ' ' : '';
    dataAttributes += 'data-itemid="' + possibleResponse.item_id + '"';
    var responseDiv = '';
    if (possibleResponse.item_type === 'token') {
      responseDiv += '<div  ' + dataAttributes + ' id="container-item-' + possibleResponse.item_id + '" class="container-' + possibleResponse.item_type + ' drag-drop-response-element_position" style="' + labelStyle + positionStyle  + '">';
      responseDiv += '<div  ' + dataAttributes + ' class="item-same-size drag-drop-token-dragged_border ' + additionalClass + '" style="' + labelStyle + '"><span class="span-' + possibleResponse.item_type + '">' + possibleResponse.text + '</span></div>';
      responseDiv += '</div>';
    } else {
      responseDiv += '<div  ' + dataAttributes + ' class="drag-drop-response-element_position drag-drop-token-dragged_border ' + additionalClass + '" style="' + labelStyle + positionStyle + '"><span class="span-' + possibleResponse.item_type + '">' + possibleResponse.text + '</span></div>';
    }
    qContainerElement.append(responseDiv);
  });

  var allowDuplicateToken = false;
  window.elementDragged = null;
  window.userResponses = {};
  var dragElements = document.getElementsByClassName('drag-drop-token');
  var dropElements = document.getElementsByClassName('drag-drop-target');
  var dragTokenContainerDropableElements = document.getElementsByClassName('container-token');
  for (var i = 0; i < dragElements.length; i++) {
    initializeTokenEventListnerForTarget(dragElements[i], init, _);
    initializeTargetToReceiveToken(dragTokenContainerDropableElements[i], init, _);
  }
  for (var i = 0; i < dropElements.length; i++) {
    initializeTargetToReceiveToken(dropElements[i], init, _);
  }
  if (qContainerElement.length) {
    initializeTargetToReceiveToken(window, init, _);
  }
});
var initializeTokenEventListnerForTarget = function (tokenElement, learnosityInit, _) {
  tokenElement.setAttribute('draggable', true);
  tokenElement.addEventListener('dragstart', function(e) {
    e.dataTransfer.effectAllowed = 'move';
    this.parentNode.classList.add('drag-drop-token-container-dragged');
    elementDragged = this;
    setTimeout(function () {
      var tmp = _.find(elementDragged.classList, function (classname) {
        return classname === 'drag-drop-token-dragged'
      });
      if (!tmp) {
        elementDragged.classList.add('drag-drop-token-dragged');
      }
    });
  });
  tokenElement.addEventListener('dragend', function(e) {
    if (elementDragged) {
      if (this.parentNode) {
        this.parentNode.classList.remove('drag-drop-token-container-dragged');
      }
      elementDragged.classList.remove('drag-drop-token-dragged');
      elementDragged = null;
    }
  });
};

var initializeTargetToReceiveToken = function (targetElement, learnosityInit, _) {
  targetElement.addEventListener('dragover', function(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  });

  targetElement.addEventListener('drop', function(e) {
    if (e.preventDefault || !elementDragged) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
    var isTargetDrop = true;
    var tmp;
    tmp = _.find(this.classList, function (classname) {
      return classname === 'container-token'
    });
    var tokenItemId;
    var targetItemId;
    var removeTokenItemId;
    var existingTokenElement;
    var tokenContainerItemId;
    isTargetDrop = !!!tmp;
    tokenItemId = elementDragged.dataset.itemid;
    if (isTargetDrop) {
      if (this.dataset) {
        targetItemId = this.dataset.itemid;
        existingTokenElement = this.getElementsByClassName('drag-drop-token');
        if (existingTokenElement.length) {
          removeTokenItemId = existingTokenElement[0].dataset.itemid;
          if (removeTokenItemId === tokenItemId) {
            elementDragged.classList.remove('drag-drop-token-dragged');
            // drop the same block - target and token same block
            // here we don't need to update the user response
            return false;
          }
        }

        tmp = _.find(this.classList, function (classname) {
          return classname === 'drag-drop-token-dropped'
        });
        if (!tmp) {
          this.classList.add('drag-drop-token-dropped');
        }
        existingTokenElement = this.getElementsByClassName('drag-drop-token');
        if (existingTokenElement.length) {
          removeTokenItemId = existingTokenElement[0].dataset.itemid;
        }
      }
      var elementDraggedParentTarget = elementDragged.parentNode;
      if (elementDraggedParentTarget) {
        tmp = _.find(elementDraggedParentTarget.classList, function (classname) {
          return classname === 'drag-drop-target'
        });
        if (tmp) {
          updateUserResponse(learnosityInit, 'delete', elementDraggedParentTarget.dataset.itemid, '', _);
          elementDraggedParentTarget.classList.remove('drag-drop-token-dropped');
          if (!this.dataset) {
            removeTokenItemId = elementDragged.dataset.itemid;
            existingTokenElement = [];
            existingTokenElement[0] = elementDragged;
          }
        }
      }

    } else {
      if (!this.dataset) {
        // drop the token from its own container
        // here we don't need to update the user response
        return false;
      }
      tokenContainerItemId = this.dataset.itemid;
      if (tokenContainerItemId !== tokenItemId) {
        // token does not allow to share the token container
        // here we don't need to update the user response
        return false;
      }
      var elementDraggedParent = elementDragged.parentNode;
      if (elementDraggedParent) {
        elementDraggedParent.classList.remove('drag-drop-token-dropped');
        targetItemId = elementDraggedParent.dataset.itemid;
        updateUserResponse(learnosityInit, 'delete', targetItemId, '', _);
        existingTokenElement = elementDraggedParent.getElementsByClassName('drag-drop-token');
        if (existingTokenElement.length) {
          removeTokenItemId = existingTokenElement[0].dataset.itemid;
        }
      }
    }
    if (this.dataset) {
      var cln = elementDragged.cloneNode(true);
      cln.classList.remove('drag-drop-token-dragged');
      elementDragged.classList.add('drag-drop-token-dragged');
      cln.classList.remove("drag-drop-token-dragging");
      this.appendChild(cln);
      // here we will update user response
      if (removeTokenItemId !== tokenItemId) {
        updateUserResponse(learnosityInit, 'update', targetItemId, tokenItemId, _);
      }
      elementDragged.remove();
      elementDragged = null;
      initializeTokenEventListnerForTarget(cln, learnosityInit, _);
    }
    if (existingTokenElement && existingTokenElement.length && removeTokenItemId) {
      var findExistingTokenContainer = document.getElementById('container-item-' + removeTokenItemId);
      if (findExistingTokenContainer) {
        var existingToken = existingTokenElement[0].cloneNode(true);
        existingToken.classList.remove('drag-drop-token-dragged');
        findExistingTokenContainer.appendChild(existingToken);
        existingTokenElement[0].remove();
        initializeTokenEventListnerForTarget(existingToken, learnosityInit, _);
      }
    }
    return false;
  });
};

var updateUserResponse = function (learnosityInit, updateMode, targetId, tokenId, _) {
  if (!learnosityInit) return;
  var userResponse = learnosityInit.response || [];
  var tmpTarget = _.find(userResponse, function (a) {
    return a.target_id === targetId;
  });
  if (tmpTarget) {
    if (updateMode === 'update') {
      tmpTarget.token_id = tokenId;
    } else if (updateMode === 'delete') {
      tmpTarget.token_id = '';
    }

  } else {
    if (updateMode === 'update') {
      userResponse.push({target_id: targetId, token_id: tokenId});
    }
  }
  console.log('userResponse', userResponse);
  learnosityInit.response = userResponse;
  if (learnosityInit.events) {
    learnosityInit.events.trigger('changed', userResponse);
  }
};







