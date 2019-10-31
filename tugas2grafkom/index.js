(function() {

  glUtils.SL.init({ callback: function() { main(); } });

  function main() {
    var canvas = document.getElementById("glcanvas");
    var gl = glUtils.checkWebGL(canvas);
  
    var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex);
    var fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);
    var vertexShader2 = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v2.vertex);
    var fragmentShader2 = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v2.fragment);
    var program = glUtils.createProgram(gl, vertexShader, fragmentShader);
    var program2 = glUtils.createProgram(gl, vertexShader2, fragmentShader2);

    function line() //program2
    {
      gl.useProgram(program2);
      var linesVertices = new Float32Array([
    
        -0.4, -0.3,     
        -0.4, -0.2,     
        -0.3, -0.2,    
        -0.3, +0.2,     
        -0.4, +0.2,     
        -0.4, +0.3,     
        -0.1, +0.3,     
        -0.1, +0.2,     
        -0.2, +0.2,     
        -0.2, -0.2,     
        -0.1, -0.2,     
        -0.1, -0.3,     
      ]);

      var linesVerticesBufferObject = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, linesVerticesBufferObject);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(linesVertices), gl.STATIC_DRAW);

      var vPosition = gl.getAttribLocation(program2, 'vPosition');
      // var vColor = gl.getAttribLocation(program2, 'vColor');
      // gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
      gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
      // //(vPosition, 2, type, normalized, stride, offset);
      // gl.vertexAttribPointer(vColor, 3, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);

      gl.enableVertexAttribArray(vPosition);
      // gl.enableVertexAttribArray(vColor);

      theta += Math.PI * 0.0044;
      gl.uniform1f(thetaLoc, theta);
    }
    
    function triangle() //program
    {
      gl.useProgram(program);

      var triangleVertices = new Float32Array([
        +0.4, -0.3,
        +0.1, -0.3, 
        +0.1, -0.2,
        +0.1, -0.2,
        +0.4, -0.2,
        +0.4, -0.3,
        +0.3, -0.2, 
        +0.3, +0.2,
        +0.2, +0.2,
        +0.2, +0.2, 
        +0.2, -0.2,
        +0.3, -0.2,
        +0.4, +0.2,  
        +0.4, +0.3,  
        +0.1, +0.3,  
        +0.1, +0.3,
        +0.1, +0.2,
        +0.4, +0.2
      ]);

      var triangleVertexBufferObject = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);

      var vPosition = gl.getAttribLocation(program, 'vPosition');
      // var vColor = gl.getAttribLocation(program, 'vColor');
      // gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
      gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
      //(vPosition, 2, type, normalized, stride, offset);
      // gl.vertexAttribPointer(vColor, 3, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
      // gl.enableVertexAttribArray(vPosition);

      
      if (scale >= 1) melebar = -1;
      else if (scale <= -1) melebar = 1;
      scale = scale + (melebar * 0.0044);
      gl.uniform1f(scaleLoc, scale);
      
    }

    
    var thetaLoc = gl.getUniformLocation(program2, 'theta');
    var theta = 0;
    var scaleLoc = gl.getUniformLocation(program, 'scale');
    var scale = 1;
    var melebar = 1;

    function render() {     
      gl.clearColor(0.0, 0.25, 0.25, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      line();
      gl.drawArrays(gl.LINE_LOOP, 0, 12);

      triangle();
      gl.drawArrays(gl.TRIANGLES, 0,18);
      
      requestAnimationFrame(render);
    }
    render();
  }

})();
